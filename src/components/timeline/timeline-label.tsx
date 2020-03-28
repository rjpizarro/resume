import React from 'react'
import Typography from "@material-ui/core/Typography"
import format from "date-fns/format"

interface TimelineLabelProps {
  startDate: Date,
  endDate: Date,
  company: string,
  jobTitle: string,
}

const TimelineLabel = (props: TimelineLabelProps) => {
  return (
    <div>
      <Typography variant="caption" data-testid="dates">{format(props.startDate, "yyyy MMM")} - {format(props.endDate, "yyyy MMM")}</Typography>
      <Typography variant="subtitle1">{props.company}</Typography>
      <Typography variant="subtitle2">{props.jobTitle}</Typography>
    </div>
  )
}

export default TimelineLabel