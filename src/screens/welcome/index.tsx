import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'

import ProfileCard from 'components/profile-card'
import useFackeData from 'fake'

function Welcome() {
  const {
    getDataUsers,
  } = useFackeData()

  const [dataUsers, setDataUsers] = useState([])

  useEffect(() => {
    getDataUsers(96)
      .then(({results}: any) => setDataUsers(results))
  }, [])

  return (
    <Container>
      <CssBaseline />
      <AppBar position='static' color='default'>
        <Toolbar>
          <Button component={ Link } to="/login" variant="outlined" color="secondary">
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Box mt={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={1}>
            {dataUsers.map(({picture, login}: any) => <ProfileCard key={login.uuid} image={picture.large} />)}
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Welcome
