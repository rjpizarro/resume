import React from 'react'
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import IconLabel from "../icon-label"
import {
  FaGamepad,
  FaBirthdayCake,
  FaBookReader,
  FaPlaneDeparture,
  FaHeadphones,
  FaLinkedin
} from "react-icons/fa"
import differenceInCalendarYears from 'date-fns/differenceInCalendarYears';
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';
import isBefore from 'date-fns/isBefore';
import getDayOfYear from 'date-fns/getDayOfYear';
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import makeStyles from "@material-ui/core/styles/makeStyles"

const useStyles = makeStyles({
  container: {
    paddingTop: 30
  },
  linkedinContactContainer: {
    marginTop: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
})

const getExactYearsOld = () => {
  const currentYear = new Date().getFullYear()
  const today = new Date()
  const birthday = new Date("1988/04/13")
  const thisYearBirthDay = new Date(`${currentYear}/04/13`)
  let yearsOld = differenceInCalendarYears(today, birthday)
  let daysOld = differenceInCalendarDays(today, thisYearBirthDay)

  if (isBefore(today, thisYearBirthDay)) {
    yearsOld = yearsOld - 1
    daysOld = getDayOfYear(currentYear) + daysOld
  }

  return `${yearsOld} years and ${daysOld} days old`
}

const AboutMe = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
      query {
          argentineFlag: file(relativePath: { eq: "argentina-flag.png" }) {
              childImageSharp {
                  fixed(width: 45) {
                      ...GatsbyImageSharpFixed
                  }
              }
          }
      }
  `)

  return (
    <Grid container className={classes.container} justify="center">
      <Grid container item xs={8}>
        <Grid item xs={6}>
          <IconLabel
            icon={<Img fixed={data.argentineFlag.childImageSharp.fixed} />}
            label="Argentinean"
          />
        </Grid>
        <Grid item xs={6}>
          <IconLabel icon={<FaBirthdayCake />} iconColor="#4caf50" label={getExactYearsOld()} />
        </Grid>
        <Grid item xs={6}>
          <IconLabel icon={<FaGamepad />} iconColor="#ff9800" label="Open source enthusiastic" />
        </Grid>
        <Grid item xs={6}>
          <IconLabel icon={<FaHeadphones />} iconColor="#673ab7" label="I love listening to music! (and play it too)" />
        </Grid>
        <Grid item xs={6}>
          <IconLabel icon={<FaBookReader />} iconColor="#CDDC39" label="Read ❤️" />
        </Grid>
        <Grid item xs={6}>
          <IconLabel icon={<FaPlaneDeparture />} iconColor="#607d8b" label="Travel!" />
        </Grid>
        <Grid item xs={12} className={classes.linkedinContactContainer}>
          <Typography>
            If you want to know more, don't hesitate to contact me:
          </Typography>
          <IconButton onClick={() => window.open("https://www.linkedin.com/in/rjpizarro/")}>
            <FaLinkedin color="#2178B5" size={40} />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default AboutMe