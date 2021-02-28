import React from 'react';
// import PropTypes from 'prop-types';
// import { StaticQuery, graphql } from "gatsby"
import styled from '@emotion/styled';

const Container = styled.div`
  width: 85%;
`;

const OuterContainer = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
  flex-direction: row;
  height: 70vh;
`;

const ContactForm = () => (
  <OuterContainer>
    <Container>
      <form
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        name="contact"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <label>
          Name
          <input type="text" name="name" id="name" placeholder="Name" />
        </label>
        <label>
          Email
          <input type="email" name="email" id="email" placeholder="Email" />
        </label>
        <label>
          Subject
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
          />
        </label>
        <label>
          Message
          <textarea
            name="message"
            id="message"
            rows="5"
            placeholder="Type your message here..."
          />
        </label>
        <button type="submit">Send me a message!</button>
        <input type="reset" value="Clear" />
      </form>
    </Container>
  </OuterContainer>
);

export default ContactForm;
