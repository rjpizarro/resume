import React from 'react'
import Container from "@material-ui/core/Container"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Divider from "@material-ui/core/Divider"
import Typography from "@material-ui/core/Typography"

interface SectionProps {
  children: React.ReactChildren
  title?: string
  divider?: boolean
}

const useStyles = makeStyles({
  container: {
    marginTop: 35,
  },
  sectionTitle: {
    fontSize: 50,
    textAlign: "center"
  }
})

const Section = (props: SectionProps) => {
  const { children, divider, title } = props
  const classes =  useStyles()

  return (
    <div className={classes.container}>
      {title &&
        <Typography variant="h2" className={classes.sectionTitle}>
          {title}
        </Typography>
      }
      {divider && <Divider />}
      <Container component="section" maxWidth="md">
        {children}
      </Container>
    </div>
  )
}

export default Section