import * as yup from 'yup'
import { useState, useEffect } from 'react'
import useFormal from '@kevinwolf/formal'
import { Auth } from 'aws-amplify'

export default function useAuth() {
  const [ useConfirmationCode, setUseConfirmationCode ] = useState(false)
  const [ confirmationCode, setConfirmationCode ] = useState('')

  const schema = yup.object().shape({
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    password: yup
      .string()
      .required('No password provided.')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(
        /^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]/,
        "Must Contain Minimun 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    authenticationMethod: yup.object().shape({
      email: yup
        .string()
        .when('phoneNumber', {
            is: '',
            then: yup.string().email().required('An email is required'),
            otherwise: yup.string(),
        }),
      phoneNumber: yup
        .string()
        .when('email', {
            is: '',
            then: yup.string().required('A phone number is required'),
            otherwise: yup.string(),
        }),
    }, [['phoneNumber', 'email']]),
    authentication: yup.string().required('Please choose an authentication method'),
  })
  
  const initialValues = {
    firstName: '',
    lastName: '',
    password: '',
    authenticationMethod: { email: '', phoneNumber: '' },
    authentication: '',
  }

  const formal = useFormal(initialValues, {
    schema,
    onSubmit: (values) => {
      const { firstName, lastName, authentication, password, authenticationMethod } = values
      const { email, phoneNumber } = authenticationMethod

      const username = authentication === 'email' ? email : `+506${phoneNumber}`
      
      Auth.signUp({
          username,
          password,
          attributes: {
            name: firstName,
            family_name: lastName,
          }
        })
        .then(() => setUseConfirmationCode(true))
        .catch(err => console.log(err))
    }
  })

  const handleSignUp = (e: any) => {
    e.preventDefault()
    formal.submit()
  }

  useEffect(() => {
    if (confirmationCode.length === 6) {
      const { authentication, authenticationMethod } = formal.values
      const { email, phoneNumber } = authenticationMethod
      const username = authentication === 'email' ? email : `+506${phoneNumber}`
      Auth.confirmSignUp(username, confirmationCode, {
        // Optional. Force user confirmation irrespective of existing alias. By default set to True.
        forceAliasCreation: true    
      }).then(data => console.log(data))
      .catch(err => console.log(err))
    }
  }, [confirmationCode])

  return {
    handleSignUp,
    useConfirmationCode,
    setConfirmationCode,
    formal,
  }
}