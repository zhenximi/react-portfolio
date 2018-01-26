import React from 'react';
import {
  Container,
  Divider,
} from 'semantic-ui-react';

const AboutMe = () => (
  <Container style={{
    height: '500px',
    bottom: '0px',
  }}
  >
    <Divider clearing />
    <p>
      Design and Build by Zhenxi Mi with <span role="img" aria-label="love" >❤️</span>
    </p>
  </Container>
);

export default AboutMe;
