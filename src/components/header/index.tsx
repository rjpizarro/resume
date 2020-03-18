import { Link } from "gatsby"
import React from "react"
import Typography from "@material-ui/core/Typography"

interface HeaderProps {
  siteTitle: string
}

// makeStyles create an issue on styles when build
// use inline styles for now
const styles ={
  siteTitle: {
    fontSize: 45,
    margin: 0,
    textAlign: "center",
  },
}

const Header = ({ siteTitle }: HeaderProps) => {

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
        <Typography variant="h1" style={styles.siteTitle}>
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
