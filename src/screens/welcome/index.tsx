import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'

import ProfileCard from 'components/profile-card'
import useFackeData from 'fake'

function Welcome() {
  const {
    getDataUsers,
  } = useFackeData()

  const [dataUsers, setDataUsers] = useState([])

  useEffect(() => {
    getDataUsers(500)
      .then(({results}: any) => setDataUsers(results))
  }, [])

  return (
    <Container>
      <CssBaseline />
      <Link to="/login">
        Already have an account? Sign in
      </Link>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {dataUsers.map(({picture, login}: any) => <ProfileCard key={login.uuid} image={picture.large} />)}
        </Grid>
      </Grid>
    </Container>
  )
}

export default Welcome
