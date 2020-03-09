import React from "react"

import Layout from "../components/layout"
import AvatarImage from "../components/avatar-image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi!</h1>
    <div>
      <p>Although I studied a B.A in Social Communication, I have always been a techie. That led me, around 10 years ago, to start a blog. I never thought that I was about to find a career also.</p>
      <p>Early on I found that I was able to edit the page's HTML and CSS. Very soon, like an owl, I was up all night learning and editing every line of code from my site...</p>
      <p>If you want to know the rest of this techie story, don't hesitate in contact me.</p>
    </div>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <AvatarImage />
    </div>
  </Layout>
)

export default IndexPage
