import React from 'react';
import {
  Container,
  Header,
  Popup,
  Image,
} from 'semantic-ui-react';

import UnderlineText from './TextFormatter/UnderlineText';

const OpeningIntro = () => (
  <React.Fragment>
    <Container
      fluid
      style={{
        background: 'rgba(49,45,43,.2)',
        height: '500px',
        position: 'absolute',
        zIndex: '100',
      }}
    />
    <Container
      fluid
      style={{
        height: '500px',
        top: '0px',
        overflow: 'hidden',
        position: 'absolute',
      }}
    >
      <Image
        src="/assets/images/sketching.jpeg"
        fluid
        style={{
          position: 'relative',
          top: '-150px',
        }}
      />
    </Container>
    <Container
      style={{
        padding: '160px 0',
        height: '200px',
        position: 'relative',
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
  </React.Fragment>
);

export default OpeningIntro;
