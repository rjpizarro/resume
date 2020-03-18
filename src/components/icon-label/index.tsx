import React from 'react'
import makeStyles from "@material-ui/core/styles/makeStyles"
import Typography from "@material-ui/core/Typography"
import { IconContext } from "react-icons";

interface IconLabelProps {
  icon: React.ReactNode
  label: string
  iconColor?: string
}

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    marginBottom: 15,
  },
  container: {
    display: "flex",
    alignItems: "center",
  },
  iconWrapper: {
    flex: 1,
  },
  label: {
    flex: 5,
  }
})

const IconLabel = (props: IconLabelProps) => {
  const {icon, label, iconColor} = props
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <div className={classes.iconWrapper}>
        <IconContext.Provider value={{ color: iconColor, size: "40px" }}>
          {icon}
        </IconContext.Provider>
      </div>
      <Typography className={classes.label} variant="subtitle2">
        {label}
      </Typography>
    </div>
  )
}

export default IconLabel