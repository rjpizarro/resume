import React from 'react'
import renderer from 'react-test-renderer'

import Description from './index'

jest.mock('../avatar-image', () => 'AvatarImage')

describe("Description", () => {
  it("renders normally", () => {
    const tree = renderer
      .create(<Description />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})