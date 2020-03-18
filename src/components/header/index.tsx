import { Link } from "gatsby"
import React from "react"
import Typography from "@material-ui/core/Typography"
import makeStyles from "@material-ui/core/styles/makeStyles"

interface HeaderProps {
  siteTitle: string
}


const useStyles = makeStyles({
  siteTitle: {
    fontSize: 45,
    margin: 0,
    textAlign: "center",
  },
})

const Header = ({ siteTitle }: HeaderProps) => {
  const classes = useStyles()

  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <Typography variant="h1" className={classes.siteTitle}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </Typography>
      </div>
    </header>
  )
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
