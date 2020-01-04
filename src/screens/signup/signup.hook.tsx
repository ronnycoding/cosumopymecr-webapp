import * as yup from 'yup'
import useFormal from '@kevinwolf/formal'

export default function useAuth() {
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
    onSubmit: values => console.log("Your values are:", values)
  })

  const handleSubmit = (e: any) => {
    e.preventDefault()
    formal.submit()
  }

  return {
    handleSubmit,
    formal
  }
}