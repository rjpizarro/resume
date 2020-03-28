import React from "react"
import renderer from "react-test-renderer"
import { render, waitFor } from "@testing-library/react"
import * as Gatsby from "gatsby"


import NotFoundPage from "../404"

jest.mock("../../components/layout", () => (props) => <div>{props.children}</div>)

const data = {
  "site": {
    "siteMetadata": {
      "title": "Rodrigo Pizarro - Résumé",
      "description": "",
      "author": "@rjpizarro"
    }
  }
}

beforeEach(() => {
  Gatsby.useStaticQuery.mockImplementation(() => (data));
})

afterEach(() => {
  Gatsby.useStaticQuery.mockImplementation(() => {});
})

describe("404 Page", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<NotFoundPage />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it("should configure page title correctly", async () => {
    render(<NotFoundPage />)

    await waitFor(() => {
      expect(document.title).toEqual("404: Not found | Rodrigo Pizarro - Résumé")
    })
  })
})