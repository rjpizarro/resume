// VENDOR
import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { graphql } from "gatsby"

// COMPONENTS
import Layout from "../components/layout"
import AvatarImage from "../components/avatar-image"
import SEO from "../components/seo"
import SkillsSetGrid from "../components/skills-set-grid"
import Timeline from "../components/timeline"
import { Container } from "@material-ui/core"
import Divider from "@material-ui/core/Divider"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Container maxWidth="md">
        <Grid container>
          <Grid item lg={8}>
            <h1>Hi!</h1>
            <div>
              <Typography>Although I studied a B.A in Social Communication, I have always been a techie. That led me, around 10 years ago, to start a blog. I never thought that I was about to find a career also.</Typography>
              <Typography>Early on I found that I was able to edit the page's HTML and CSS. Very soon, like an owl, I was up all night learning and editing every line of code from my site.</Typography>
              <Typography>The years went by and I have the chance to learn and work with other tools:</Typography>
            </div>
          </Grid>
          <Grid item lg={4}>
            <a href="https://charat.me/">
              <AvatarImage />
            </a>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="md">
        <SkillsSetGrid />
      </Container>
      <div>
        <Divider />
        <Container maxWidth="md">
          <Timeline jobs={data.allJob.nodes} />
        </Container>
      </div>
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
