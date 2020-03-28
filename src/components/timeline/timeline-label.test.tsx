import React from 'react'
import renderer from 'react-test-renderer'
import { render } from '@testing-library/react'

import TimelineLabel from "./timeline-label"

describe("TimelineLabel", () => {
  it("render normally with required props", () => {
    const tree = renderer
      .create(
        <TimelineLabel
          startDate={new Date("01/03/2014")}
          endDate={new Date("01/05/2015")}
          company="Test company"
          jobTitle="Test job title"
        />
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it("should format the dates properly", () => {
    const { getByTestId } = render(
      <TimelineLabel
        startDate={new Date("03/01/2014")}
        endDate={new Date("05/01/2015")}
        company="Test company"
        jobTitle="Test job title"
      />
    )

    expect(getByTestId("dates").innerHTML).toEqual("2014 Mar - 2015 May")
  })
})