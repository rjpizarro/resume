import React from "react"
import renderer from "react-test-renderer"
import Index from "../index"
import * as Gatsby from "gatsby"
import { render, waitFor } from "@testing-library/react"

jest.mock("../../components/layout", () => (props) => <div>{props.children}</div>)
jest.mock("../../components/description", () => () => "Description")
jest.mock("../../components/skills-set-grid", () => () => "SkillsSetGrid")
jest.mock("../../components/timeline", () => () => "Timeline")
jest.mock("../../components/about-me", () => () => "AboutMe")

const data = {
  "allJob": {
    "nodes": [
      {
        "startDate": "2017/04/01",
        "endDate": "2020/02/01",
        "company": "Yuniku Inc.",
        "jobTitle": "Javascript Engineer - Co-founder",
        "description": "I performed as a Lead Javascript developer in multiple projects. In many of them, I also was in charge of developing the project architecture.\n\nI worked with technologies like React, React-native, Redux, Node.js, GraphQl, PostgreSQL, Mongo, and AWS.",
        "id": "7e004279-b929-5bf9-b9f5-a849bb364a0b"
      },
      {
        "startDate": "2012/07/01",
        "endDate": "2017/07/01",
        "company": "Estudio Caburé",
        "jobTitle": "Professor",
        "description": "I taught HTML5 and Wordpress basic concepts for beginners developers and designers.",
        "id": "94aa3847-d34e-5805-a37b-6d417b297071"
      },
      {
        "startDate": "2016/11/01",
        "endDate": "2017/04/01",
        "company": "Vault Consulting",
        "jobTitle": "Javascript Engineer",
        "description": "I developed mobile applications with React-Native. I also worked with other tools like Node.js, Firebase, and ElasticSearch.",
        "id": "6de3c56a-95db-53f5-bf01-6977f4a5bd36"
      },
      {
        "startDate": "2015/05/01",
        "endDate": "2016/11/01",
        "company": "Globant",
        "jobTitle": "Web UI Developer",
        "description": "As a Web UI Developer, I worked in the  Air Booking Flow rebuild for Southwest Airlines.  The technologies used were React and Java.",
        "id": "1dac6ed0-aa34-5635-a20d-198ca4397461"
      },
      {
        "startDate": "2012/03/01",
        "endDate": "2015/04/01",
        "company": "Freelance",
        "jobTitle": "Javascript Developer",
        "description": "As a Freelancer, I developed a variety of websites for different clients. Mostly I used HTML5, CSS3, PHP, and Wordpress to build from eCommerce and business sites to landing pages and custom plugins.",
        "id": "e3d5e648-787c-54ec-b3b7-969e47b24a7b"
      },
      {
        "startDate": "2013/02/01",
        "endDate": "2014/03/01",
        "company": "COINED International",
        "jobTitle": "Web Developer",
        "description": "COINED is the leading organization in Latin America providing intercultural experiences in Spanish. During my time there I developed COINED's landing page builder system and their main website.",
        "id": "58751497-562e-5c01-aba6-20b46bbad9a8"
      },
      {
        "startDate": "2007/04/01",
        "endDate": "2011/01/01",
        "company": "LV2 – AM970 / FM 99.7, Radio Revés 88.7, El Quinto Medio ",
        "jobTitle": "Radio Producer",
        "description": "In my early job years, I worked as a Radio Producer and voice-talent. I was in charge of creating the radio show content, interviewing personalities, and multimedia editing (audio, video, and photo). During this time I started to work in the web development field, building a webpage for each radio show.",
        "id": "a0bf062e-6476-5cbe-937a-737eeb49980f"
      }
    ]
  }
}

const SEOData = {
  "site": {
    "siteMetadata": {
      "title": "Rodrigo Pizarro - Résumé",
      "description": "",
      "author": "@rjpizarro"
    }
  }
}

beforeEach(() => {
  Gatsby.StaticQuery.mockImplementation(() => (data));
  Gatsby.useStaticQuery.mockImplementation(() => (SEOData));
});

afterEach(() => {
  Gatsby.StaticQuery.mockImplementation(() => {});
  Gatsby.useStaticQuery.mockImplementation(() => {});
});

describe("Index Page", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Index data={data} />).toJSON()

    expect(tree).toMatchSnapshot()
    expect(Gatsby.graphql).toHaveBeenCalled()
  })

  it("should configure page title correctly", async () => {
    render(<Index data={data} />)

    await waitFor(() => {
      expect(document.title).toEqual("Home | Rodrigo Pizarro - Résumé")
    })
  })
})