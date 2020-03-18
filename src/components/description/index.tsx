import React from 'react'
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import AvatarImage from "../avatar-image"
import makeStyles from "@material-ui/core/styles/makeStyles"

const useStyles = makeStyles({
  description: {
    marginTop: 20
  }
})

const Description = () => {
  const classes = useStyles()

  return (
    <Grid container spacing={8}>
      <Grid item lg={8}>
        <Typography className={classes.description}>
          Although I studied a B.A in Social Communication, I have always been a techie. That led me, around 10 years ago, to start a blog. I never thought that I was about to find a career also.
        </Typography>
        <Typography className={classes.description}>
          Early on I found that I was able to edit the page's HTML and CSS. Very soon, like an owl, I was up all night learning and editing every line of code from my site.
        </Typography>
        <Typography className={classes.description}>
          The years went by and I had the chance to learn and work with other tools:
        </Typography>
      </Grid>
      <Grid item lg={4}>
        <a href="https://charat.me/">
          <AvatarImage />
        </a>
      </Grid>
    </Grid>
  )
}

export default Description