import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import face from '../images/bwselfie-circle.webp';

const Container = styled.div`
  text-align: left;
`;

const OuterContainer = styled.div`
  text-align: center;
`;

const Description = styled.p`
  padding: 0;
  margin-bottom: 0.5rem;
  font-size: 16px;
`;

const NameHeader = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 0;
`;

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
        <Container>
          <div>
            <h2>Jamie Danielson</h2>
            <Description>
              <p>
                I am a big believer in lifetime learning. I started my web
                development journey in early 2017 and never looked back. The
                first time I wrote code for a web page I was immediately hooked.
                Being able to write code and see it in action is an incredible
                feeling. I'm always looking for ways to be more efficient, to
                automate processes and to bring ideas to life. I've come so far
                in 3 years but will always be learning and improving to be the
                best I can be.
                <br />
                <br />
                I currently work as an eCommerce Specialist, which entails
                everything to do with eCommerce websites. I collaborate with
                designers and product managers on new features, I implement
                design and front-end development, I assess and improve SEO and
                web accessibility, I automate SQL maintenance tasks and plugin
                deployments using Azure DevOps... and boldly take on any
                challenge I face!
                <br />
                <br />
                <b>Hobbies:</b> Reading, Writing, Learning
                <br />
                <b>Specialties:</b> HTML, CSS, JS, SQL, SEO, A11y
                <br />
                <b>Cats:</b> JD, Hera, Apollo, Dante
                <br />
              </p>
            </Description>
          </div>
        </Container>
      </OuterContainer>
    )}
  />
);

NameHeader.propTypes = {
  siteTitle: PropTypes.string,
  subtitle: PropTypes.string,
};

NameHeader.defaultProps = {
  siteTitle: ``,
  subtitle: ``,
};

export default AboutMe;
