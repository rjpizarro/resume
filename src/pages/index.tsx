// VENDOR
import React from "react"
import { Container, Row, Col } from 'react-grid-system';

// COMPONENTS
import Layout from "../components/layout"
import AvatarImage from "../components/avatar-image"
import SEO from "../components/seo"
import SkillsSetGrid from "../components/skills-set-grid"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container fluid>
      <Row>
        <Col lg={8}>
          <h1>Hi!</h1>
          <div>
            <p>Although I studied a B.A in Social Communication, I have always been a techie. That led me, around 10 years ago, to start a blog. I never thought that I was about to find a career also.</p>
            <p>Early on I found that I was able to edit the page's HTML and CSS. Very soon, like an owl, I was up all night learning and editing every line of code from my site.</p>
            <p>The years went by and others tools appeared:</p>
          </div>
        </Col>
        <Col>
          <a href="https://charat.me/">
            <AvatarImage />
          </a>
        </Col>
      </Row>
      <SkillsSetGrid />
      <Row>
        <Col>
          <p>If you want to know the rest of this techie story, don't hesitate in contact me.</p>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
