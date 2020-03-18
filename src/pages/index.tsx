// VENDOR
import React from "react"
import { graphql } from "gatsby"

// COMPONENTS
import Layout from "../components/layout"
import SEO from "../components/seo"
import SkillsSetGrid from "../components/skills-set-grid"
import Timeline from "../components/timeline"
import Section from "../components/section"
import AboutMe from "../components/about-me"
import Description from "../components/description"


const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Section title="Hi!" divider>
        <Description />
      </Section>
      <Section>
        <SkillsSetGrid />
      </Section>
      <Section divider title="Experience">
        <Timeline jobs={data.allJob.nodes} />
      </Section>
      <Section divider title="More about me">
        <AboutMe />
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
