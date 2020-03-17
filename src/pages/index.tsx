// VENDOR
import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { graphql } from "gatsby"
import makeStyles from "@material-ui/core/styles/makeStyles"

// COMPONENTS
import Layout from "../components/layout"
import AvatarImage from "../components/avatar-image"
import SEO from "../components/seo"
import SkillsSetGrid from "../components/skills-set-grid"
import Timeline from "../components/timeline"
import Section from "../components/section"

const useStyles = makeStyles({
  description: {
    marginTop: 20
  }
})

const IndexPage = ({ data }) => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Home" />
      <Section>
        <Grid container>
          <Grid item lg={8}>
            <h1>Hi!</h1>
            <Typography className={classes.description}>
              Although I studied a B.A in Social Communication, I have always been a techie. That led me, around 10 years ago, to start a blog. I never thought that I was about to find a career also.
            </Typography>
            <Typography className={classes.description}>
              Early on I found that I was able to edit the page's HTML and CSS. Very soon, like an owl, I was up all night learning and editing every line of code from my site.
            </Typography>
            <Typography className={classes.description}>
              The years went by and I have the chance to learn and work with other tools:
            </Typography>
          </Grid>
          <Grid item lg={4}>
            <a href="https://charat.me/">
              <AvatarImage />
            </a>
          </Grid>
        </Grid>
      </Section>
      <Section>
        <SkillsSetGrid />
      </Section>
      <Section divider title="Experience">
        <Timeline jobs={data.allJob.nodes} />
      </Section>
      <Section divider title="More about me">
        <Timeline jobs={data.allJob.nodes} />
      </Section>
    </Layout>
  )
}

export const query = graphql`
    query JobsQuery {
        allJob {
            nodes {
                startDate
                endDate
                company
                jobTitle
                description
                id  
            }
        }
    }
`

export default IndexPage
