import React from "react"
import ThemeProvider from "@material-ui/core/styles/MuiThemeProvider"
import Typography from "@material-ui/core/Typography"
import { useStaticQuery, graphql } from "gatsby"
import "typeface-roboto"
import "typeface-inter"

import Header from "../header"
import theme from "../../theme"
import "./styles.css"
import { makeStyles } from "@material-ui/core/styles"

interface LayoutProps {
  children: React.ReactChildren
}

const useStyles = makeStyles({
  container: {
    position: "relative"
  },
  contentWrapper: {
    margin: `0 auto`,
    padding: `0 1.0875rem 1.45rem`,
    paddingBottom: 200
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    textAlign: "center"
  },
  footerBackground: {
    position: "absolute",
    bottom: 0,
    zIndex: -10
  }
})

const Index = ({ children }: LayoutProps) => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={classes.container}>
      <ThemeProvider theme={theme}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className={classes.contentWrapper}>
          <main>{children}</main>
          <footer className={classes.footer}>
            <Typography variant="caption">
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </Typography>
          </footer>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className={classes.footerBackground}
        >
          <path
            fill="#00cba9"
            fill-opacity="1"
            d="
             M 0,32
             L 48,42.7
             C 96,53,192,75,288,112
             C 384,149,480,203,576,197.3
             C 672,192,768,128,864,117.3
             C 960,107,1056,149,1152,160
             C 1248,171,1344,149,1392,138.7
             L 1440,128
             L 1440,320
             L 1392,320
             C 1344,320,1248,320,1152,320
             C 1056,320,960,320,864,320
             C 768,320,672,320,576,320
             C 480,320,384,320,288,320
             C 192,320,96,320,48,320
             L0,320
             Z
           "
          >
          </path>
        </svg>
      </ThemeProvider>
    </div>
  )
}

export default Index