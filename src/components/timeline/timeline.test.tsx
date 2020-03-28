import React from 'react'
import renderer from 'react-test-renderer'
import { render, fireEvent, waitFor } from '@testing-library/react'

jest.mock("@material-ui/core/Fade", () => (props) => <div>{props.children}</div>)

import Timeline from "./index"

const jobs = [
  {
    startDate: new Date("01/03/2014"),
    endDate: new Date("01/05/2015"),
    company:"Test company",
    jobTitle:"Test job title",
    description: "Job test description",
    id: 1
  },
  {
    startDate: new Date("01/10/2015"),
    endDate: new Date("01/11/2016"),
    company:"Test company 2",
    jobTitle:"Test job title 2",
    description: "Job test description 2",
    id: 2
  },
  {
    startDate: new Date("01/02/2017"),
    endDate: new Date("01/03/2018"),
    company:"Test company 3",
    jobTitle:"Test job title 3",
    description: "Job test description 3",
    id: 3
  },
]

const extraJob = {
  startDate: new Date("01/04/2018"),
  endDate: new Date("01/06/2019"),
  company:"Test company 4",
  jobTitle:"Test job title 4",
  description: "Job test description 4",
  id: 4
}

describe("Timeline", () => {
  it("render normally without jobs", () => {
    const tree = renderer
      .create(<Timeline />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it("render normally with 3 jobs", () => {
    const tree = renderer
      .create(<Timeline jobs={jobs} />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it("render normally with more than 3 jobs", () => {
    const tree = renderer
      .create(<Timeline jobs={[...jobs, extraJob]} />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it("render normally with more than 3 jobs", () => {
    const tree = renderer
      .create(<Timeline jobs={[...jobs, extraJob]} />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it("show more jobs when click on View More", async () => {
    const { getByTestId, queryAllByTestId, rerender } = render(<Timeline jobs={[...jobs, extraJob]} />)

    const showMoreButton = getByTestId("show-more-button")
    expect(queryAllByTestId("job-description")).toHaveLength(3)
    expect(showMoreButton.innerHTML).toContain("Show More!")
    expect(showMoreButton).not.toBeDisabled()

    fireEvent.click(showMoreButton)

    await waitFor(() => {
      expect(queryAllByTestId("job-description")).toHaveLength(4)
      expect(showMoreButton.innerHTML).toContain("That's all folks! 🐷")
      expect(showMoreButton).toBeDisabled()
    })
  })
})