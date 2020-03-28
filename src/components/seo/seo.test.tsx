import React from 'react'
import { render, waitFor } from '@testing-library/react'
import * as Gatsby from 'gatsby';

import SEO from './index'

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

// TODO: toHaveProperty trigger an error when try to find "property" in meta tag

describe("SEO",() => {
  it("render normally with required props and default", async () => {
    render(<SEO title="Site title" />)

    await waitFor(() => {
      const metas = document.getElementsByTagName("meta")

      expect(document.title).toEqual("Site title | Rodrigo Pizarro - Résumé")
      expect(metas.length).toEqual(8)

      // meta description
      expect(metas.item(0)).toHaveProperty("name", "description")
      expect(metas.item(0)).toHaveProperty("content", "")

      // meta og:title
      // expect(metas.item(1)).toHaveProperty("property", "og:title")
      expect(metas.item(1)).toHaveProperty("content", "Site title")

      // meta og:description
      // expect(metas.item(2)).toHaveProperty("property", "og:description")
      expect(metas.item(2)).toHaveProperty("content", "")

      // meta og:type
      //expect(metas.item(3)).toHaveProperty("property", "og:type")
      expect(metas.item(3)).toHaveProperty("content", "website")

      // meta twitter:card
      expect(metas.item(4)).toHaveProperty("name", "twitter:card")
      expect(metas.item(4)).toHaveProperty("content", "summary")

      // meta twitter:creator
      expect(metas.item(5)).toHaveProperty("name", "twitter:creator")
      expect(metas.item(5)).toHaveProperty("content", "@rjpizarro")

      // meta twitter:title
      expect(metas.item(6)).toHaveProperty("name", "twitter:title")
      expect(metas.item(6)).toHaveProperty("content", "Site title")

      // meta twitter:description
      expect(metas.item(7)).toHaveProperty("name", "twitter:description")
      expect(metas.item(7)).toHaveProperty("content", "")
    })

    expect(Gatsby.useStaticQuery).toHaveBeenCalled()
  })

  it("extends base meta information when receive description and lang props", async () => {
    const {debug} = render(<SEO title="Site title" description="Custom description" lang="ES" />)

    await waitFor(() => {
      const html = document.getElementsByTagName("html")
      const metas = document.getElementsByTagName("meta")

      //Lang
      expect(html.item(0)).toHaveProperty("lang", "ES")

      // meta description
      expect(metas.item(0)).toHaveProperty("name", "description")
      expect(metas.item(0)).toHaveProperty("content", "Custom description")

      // meta og:title
      // expect(metas.item(1)).toHaveProperty("property", "og:title")
      expect(metas.item(1)).toHaveProperty("content", "Site title")

      // meta og:description
      // expect(metas.item(2)).toHaveProperty("property", "og:description")
      expect(metas.item(2)).toHaveProperty("content", "Custom description")

      // meta og:type
      //expect(metas.item(3)).toHaveProperty("property", "og:type")
      expect(metas.item(3)).toHaveProperty("content", "website")

      // meta twitter:card
      expect(metas.item(4)).toHaveProperty("name", "twitter:card")
      expect(metas.item(4)).toHaveProperty("content", "summary")

      // meta twitter:creator
      expect(metas.item(5)).toHaveProperty("name", "twitter:creator")
      expect(metas.item(5)).toHaveProperty("content", "@rjpizarro")

      // meta twitter:title
      expect(metas.item(6)).toHaveProperty("name", "twitter:title")
      expect(metas.item(6)).toHaveProperty("content", "Site title")

      // meta twitter:description
      expect(metas.item(7)).toHaveProperty("name", "twitter:description")
      expect(metas.item(7)).toHaveProperty("content", "Custom description")
    })
  })

  it("should add a new meta tag when when receive meta props", async () => {
    const {debug} = render(<SEO title="Site title" meta={[{name: "keywords", content: "react, jest, test"}]} />)

    await waitFor(() => {
      const metas = document.getElementsByTagName("meta")

      expect(metas.length).toEqual(9)

      //new meta
      expect(metas.item(8)).toHaveProperty("name", "keywords")
      expect(metas.item(8)).toHaveProperty("content", "react, jest, test")
    })
  })

})