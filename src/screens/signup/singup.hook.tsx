import * as yup from 'yup'
import useFormal from '@kevinwolf/formal'

export default function useAuth() {
  const schema = yup.object().shape({
    // firstName: yup.string().required(),
    // lastName: yup.string().required(),
    email: yup
      .string()
      .email()
      .required(),
    password: yup
      .string()
      .required('No password provided.')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(
        /^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    phoneNumber: yup
      .string()
      .required('A phone number is required'),
  })
  
  const initialValues = {
    // firstName: '',
    // lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
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