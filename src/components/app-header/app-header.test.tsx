import React from 'react'
import renderer from 'react-test-renderer'

import AppHeader from './index'

describe("AppHeader", () => {
  it("renders normally", () => {
    const tree = renderer
      .create(<AppHeader siteTitle="Test site title" />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it("renders without site title when the siteTitle prop is undefined", () => {
    const tree = renderer
      .create(<AppHeader />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})