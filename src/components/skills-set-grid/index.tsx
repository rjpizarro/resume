import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Col, Row } from "react-grid-system"

import "./styles.scss"

const SkillsSetGrid = () => {
  const data = useStaticQuery(graphql`
      query {
          skillImageSet: allFile(filter: {relativeDirectory: {eq: "tech-logos"}}) {
              nodes {
                  childImageSharp {
                      fluid(maxHeight: 100) {
                          ...GatsbyImageSharpFluid
                          presentationWidth
                      }
                  }
              }
          }
      }
  `)

  return (
    <Row className="skills-set-grid">
      {data.skillImageSet.nodes.map(img => (
        <Col xs={6} md={4} lg={3} className="skills-set-grid--column">
          <Img
            fluid={img.childImageSharp.fluid}
            style={{
              maxWidth: img.childImageSharp.fluid.presentationWidth,
              margin: "0 auto",
            }}
          />
        </Col>
      ))}
    </Row>
  )
}

export default SkillsSetGrid