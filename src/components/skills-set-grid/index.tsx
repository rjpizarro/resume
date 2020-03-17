import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Grid from "@material-ui/core/Grid"
import Grow from '@material-ui/core/Grow';
import makeStyles from "@material-ui/core/styles/makeStyles"

const useStyles = makeStyles({
  skillColumn: {
    marginBottom: 20
  }
})

const SkillsSetGrid = () => {
  const classes = useStyles()
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
    <Grid container>
      {data.skillImageSet.nodes.map((img, idx )=> (
        <Grid key={img.id} item xs={6} md={4} lg={3} classes={{root: classes.skillColumn}}>
          <Grow in timeout={1000 + 200 * idx}>
            <Img
              fluid={img.childImageSharp.fluid}
              style={{
                maxWidth: img.childImageSharp.fluid.presentationWidth,
                margin: "0 auto",
              }}
            />
          </Grow>
        </Grid>
      ))}
    </Grid>
  )
}

export default SkillsSetGrid