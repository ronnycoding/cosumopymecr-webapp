import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      height: 200,
      width: 200,
    }
  }),
)

interface ProfileCardProps {
  image: string,
}

export default function ProfileCard(props: ProfileCardProps) {
  const classes = useStyles()
  const { image } = props
  return (
    <Grid item>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            image={image}
            title="Contemplative Reptile"
          />
        </CardActionArea>
      </Card>
    </Grid>
  )
}