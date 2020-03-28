import React from 'react'
import renderer from 'react-test-renderer'
import { render } from "@testing-library/react"

import { FaGamepad } from "react-icons/fa"
import IconLabel from './index'

describe("Icon Label", () => {
  it("render normally with required props", () => {
    const tree = renderer
      .create(<IconLabel icon={<FaGamepad />} label="label" />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it("pass iconColor prop to an icon from react-icons library", () => {
    const { getByTestId } = render(
      <IconLabel
        icon={<FaGamepad  data-testid="icon-test" />}
        label="label"
        iconColor="#FFF"
      />
    )

    expect(getByTestId("icon-test")).toHaveProperty("style.color", 'rgb(255, 255, 255)')
  })
})