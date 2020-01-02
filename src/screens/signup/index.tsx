/** @jsx jsx */
import { jsx } from 'theme-ui'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
// import Input from '@material-ui/core/Input'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { Link } from 'react-router-dom'

// @ts-ignore
import PhoneInput from 'react-phone-input-2'
// import 'react-phone-input-2/lib/material.css'
import 'react-phone-input-2/lib/style.css'

import useAuth from './singup.hook'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link to="/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 2,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

// const options = ['Correo Electrónico', 'Número de Telefóno']

export default function SignUp() {
  const classes = useStyles()
  const { handleSubmit, formal } = useAuth()

  function handleOnChangePhoneNumber(value: string, data: any) {
    formal.change("phoneNumber", value.replace(/[^0-9]+/g,'').slice(data.dialCode.length))
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {'Registrate'}
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {/* <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={formal.values.firstName}
                onChange={e => formal.change("firstName", e.target.value)}
                error={Boolean(formal.errors.firstName)}
                helperText={formal.errors.firstName && formal.errors.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={formal.values.lastName}
                onChange={e => formal.change("lastName", e.target.value)}
                error={Boolean(formal.errors.lastName)}
                helperText={formal.errors.lastName && formal.errors.lastName}
              /> */}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={formal.values.email}
                onChange={e => formal.change("email", e.target.value)}
                error={Boolean(formal.errors.email)}
                helperText={formal.errors.email && formal.errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <PhoneInput
                containerStyle={{
                  display: 'flex',
                  flexDirection: 'row'
                }}
                inputProps={{
                  name: 'phoneNumber',
                  required: true,
                  autoFocus: false,
                }}
                // containerClass="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl"
                inputClass="MuiInputBase-input MuiOutlinedInput-input"
                country={'cr'}
                onlyCountries={['cr', 'us']}
                localization={{es: 'España'}}
                inputStyle={{
                  height: '1.1875em',
                  width: '100%',
                  animationName: 'MuiInputBase-keyframes-auto-fill-cancel',
                }}
                countryCodeEditable={false}
                value={formal.values.phoneNumber}
                onChange={handleOnChangePhoneNumber}
              />
              {formal.errors.phoneNumber && formal.errors.phoneNumber}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={e => formal.change("password", e.target.value)}
                error={Boolean(formal.errors.password)}
                helperText={formal.errors.password && formal.errors.password}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/login">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  )
}