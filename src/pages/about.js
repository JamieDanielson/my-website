import React from "react"

import AboutMe from "../components/AboutMe"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About Me" />
        <h1>About Me</h1>
        <AboutMe />
    </Layout>
  )
}

export default AboutPage
