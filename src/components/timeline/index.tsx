import React, { useState } from 'react'
import Stepper from "@material-ui/core/Stepper"
import Step from "@material-ui/core/Step"
import StepLabel from "@material-ui/core/StepLabel"
import StepContent from "@material-ui/core/StepContent"
import TimelineLabel from "./timeline-label"
import Typography from "@material-ui/core/Typography"
import Fade from "@material-ui/core/Fade"
import Button from "@material-ui/core/Button"
import makeStyles from "@material-ui/core/styles/makeStyles"

type JobExperienceObjectType = {
  startDate: Date,
  endDate: Date,
  description: string,
  company: string,
  jobTitle: string,
  id: string
}

interface TimelineProps {
  jobs: [JobExperienceObjectType]
}

const useStyles = makeStyles({
  timelineContainer: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  stepContent: {
    marginTop: 8,
    borderLeft: '1px solid #bdbdbd',
    marginLeft: 12,
    paddingLeft: 20,
    paddingRight: 8,
  },
  jobDescription: {
    fontSize: 15,
    color: "#5d5d5d"
  }
})

const Timeline = (props: TimelineProps) => {
  const { jobs } = props
  const [jobsDisplayed, changeJobsDisplayed] = useState(2)
  const classes = useStyles()
  const jobsCount =  jobs.length
  const allJobsDisplayed = jobsDisplayed >= jobsCount - 1

  return (
    <div className={classes.timelineContainer}>
      <Stepper orientation="vertical" activeStep={jobsCount}>
        {jobs.filter((data, idx) => idx <= jobsDisplayed).map((job, i) => (
          <Fade in key={job.id}>
            <Step data-testid="job-description">
              <StepLabel>
                <TimelineLabel
                  company={job.company}
                  startDate={new Date(job.startDate)}
                  endDate={new Date(job.endDate)}
                  jobTitle={job.jobTitle}
                />
              </StepLabel>
              <div className={classes.stepContent}>
                <Typography className={classes.jobDescription}>
                  {job.description}
                </Typography>
              </div>
            </Step>
          </Fade>
        ))}
      </Stepper>
      <Button
        disabled={allJobsDisplayed}
        onClick={() => changeJobsDisplayed(jobsDisplayed + 3)}
        variant="outlined"
        color="primary"
        data-testid="show-more-button"
      >
        {allJobsDisplayed ? "That's all folks! 🐷" : "Show More!"}
      </Button>
    </div>
  )
}

Timeline.defaultProps = {
  jobs: []
}

export default Timeline