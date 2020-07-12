import React from "react"

import styled from "@emotion/styled"
import AboutMe from "../components/about-me"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Content = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 1.45rem 1.0875rem;
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="About Me" />
      <Content>
        <h1>About Me</h1>
        <AboutMe />
      </Content>
    </Layout>
  )
}

export default IndexPage
