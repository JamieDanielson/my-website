import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import face from "../images/bwselfie-circle.webp"

const Container = styled.div`
  text-align: left;
`

const OuterContainer = styled.div`
  text-align: center;
`

const Description = styled.p`
  padding: 0;
  margin-bottom: 0.5rem;
  font-size: 16px;
`

const NameHeader = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 0;
`

const AboutMe = () => (
  <StaticQuery
    query={graphql`
      query AboutTitleQuery {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
      }
    `}
    render={(data) => (
      <OuterContainer>
        <div>
          <img
            src={face}
            alt="jamie danielson's face"
            className="my-face"
          ></img>
        </div>
        <Container></Container>
        <Container>
          <div>
            <h3>Jamie Danielson</h3>
            <Description>
              <p>
                I am a big believer in lifetime learning. I started my web
                development journey in early 2017 and never looked back. The
                first time I added CSS for a single line on a web page I was
                immediately hooked. Now I can look back and see how much I've
                learned and grown, and look ahead to see how much I still get to
                do!
              </p>
              <p>
                I currently work as an eCommerce Specialist, which entails
                everything to do with eCommerce websites. I collaborate with
                designers and product managers on new features, I implement
                design and front-end development, I assess and improve SEO and
                web accessibility... and boldly take on any challenge I face!
              </p>
              <ul>
                <li>
                  <b>Hobbies:</b> Reading, Writing, Puzzling, Coding
                </li>
                <li>
                  <b>Specialties:</b> HTML, CSS, JS, SQL, SEO, A11y
                </li>
                <li>
                  <b>Cats:</b> JD, Hera, Apollo, Dante
                </li>
              </ul>
            </Description>
          </div>
        </Container>
      </OuterContainer>
    )}
  />
)

NameHeader.propTypes = {
  siteTitle: PropTypes.string,
  subtitle: PropTypes.string,
}

NameHeader.defaultProps = {
  siteTitle: ``,
  subtitle: ``,
}

export default AboutMe
