import React from 'react'
import renderer from 'react-test-renderer'
import { render } from "@testing-library/react"

import Section from './index'
import { Divider } from "@material-ui/core"

describe.only("Section", () => {
  it("render normally with required props", () => {
    const tree = renderer
      .create(
        <Section>
          <div>
            <span>section</span>
          </div>
        </Section>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it("render normally with title and divider props", () => {
    const tree = renderer
      .create(
        <Section divider title="Section Title">
          <div>
            <span>section</span>
          </div>
        </Section>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it("add a Divider component when receive a divider prop", () => {
    const { getByTestId } = render(
      <Section divider>
        <div>
          <span>section</span>
        </div>
      </Section>
    )

    expect(getByTestId("divider")).toBeInTheDocument()
    expect(getByTestId("divider")).toMatchSnapshot()
  })

  it("add a title when receive a title prop", () => {
    const { getByTestId, debug, getByText } = render(
      <Section title="Section Title">
        <div>
          <span>section</span>
        </div>
      </Section>
    )

    expect(getByTestId("title")).toBeInTheDocument()
    expect(getByTestId("title")).toHaveTextContent("Section Title")
  })
})