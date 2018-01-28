import React from 'react';
import {
  Container,
  Header,
  Popup,
} from 'semantic-ui-react';

import UnderlineText from './TextFormatter/UnderlineText';

const OpeningIntro = () => (
  <Container
    style={{
      height: '500px',
      bottom: '0px',
    }}
  >
    <Header as="h1" >
      Hi, I&apos;m Zhenxi, a&nbsp;
      <Popup
        trigger={<UnderlineText>Full-stack Designer</UnderlineText>}
        content={
          <div>
            <p>Full-stack Designer</p>
            <p>Some text...</p>
          </div>
        }
        position="bottom center"
      />.
    </Header>
    <p>
      I Design, Build experiences bring delights and ease.
    </p>
    <p>Keep learning for building a better world</p>
  </Container>
);

export default OpeningIntro;
