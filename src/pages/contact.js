import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from '../components/ContactForm'

const ContactPage = () => (
    <Layout>
      <SEO title="Contact Me" description="Hi there! I'm Jamie Danielson and I'd love to hear from you!" />
        <h1>Contact Me</h1>
        <ContactForm />
    </Layout>
)

export default ContactPage
