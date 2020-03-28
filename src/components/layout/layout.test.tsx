import React from 'react'
import renderer from 'react-test-renderer'
import { render } from "@testing-library/react"
import * as Gatsby from 'gatsby';

import Layout from './index'

const data = {
    "site": {
      "siteMetadata": {
        "title": "Rodrigo Pizarro - Résumé"
      }
    }
}

beforeEach(() => {
  Gatsby.useStaticQuery.mockImplementation(() => (data));
});

afterEach(() => {
  Gatsby.useStaticQuery.mockImplementation(() => {});
});

describe("Layout", () => {
  it("renders normally", () => {
    const tree = renderer
      .create(<Layout>
        <span>children</span>
      </Layout>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it("should call useStaticQuery", () => {
    render(
      <Layout>
        <span>children</span>
      </Layout>
    )

    expect(Gatsby.useStaticQuery).toBeCalled()
  })

  it("should render a children", () => {
    const { getByText } = render(
      <Layout>
        <span>children</span>
      </Layout>
    )

    expect(getByText("children")).toBeInTheDocument()
  })
})