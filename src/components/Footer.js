import React from 'react';
import {
  Container,
  Divider,
  Grid,
  Popup,
} from 'semantic-ui-react';

const Footer = () => (
  <Container style={{
    height: '110px',
    bottom: '0px',
  }}
  >
    <Divider clearing />
    <Grid container >
      <Grid.Column floated='left' width={5}>
        <p>
          Here goes the social stuff...
        </p>
      </Grid.Column>
      <Grid.Column floated='right' width={5}>
        <p style={{ textAlign: 'right' }}>
          Zhenxi Mi design and made with
          <Popup
            trigger={<span> React </span>}
            position="top center"
            content="test"
          />
          <Popup
            trigger={<span> Express </span>}
            position="top center"
            content="test"
          />
          <Popup
            trigger={<span> Firebase </span>}
            position="top center"
            content="test"
          />
          & <span role="img" aria-label="love" >❤️</span>
        </p>
      </Grid.Column>
    </Grid>
  </Container>
);

export default Footer;
