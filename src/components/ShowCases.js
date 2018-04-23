import React from 'react';
import { Segment, Container, Grid, Card } from 'semantic-ui-react';

import ImageFrame from './ImageFrame';

const ShowCases = () => (
  <Container
    style={{ height: '100%' }}
  >
    <Segment
      style={{ padding: '8em 0em' }}
      vertical
    >
      <Grid>
        <Grid.Row stretched >
          <Grid.Column width={10} >
            <Card fluid style={{ height: '540px' }} >
              <ImageFrame style={{ height: '466px', width: '100%' }} src="./assets/images/danger-texting-driving.jpg" />
              <Card.Content>
                <Card.Header>
                  SHIFT: Drive Mode
                </Card.Header>
                <Card.Description>
                  MHCID + USTWO
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column width={6} >
            <Card.Group itemsPerRow={1} >
              <Card fluid style={{ height: '258px' }}>
                <ImageFrame style={{ height: '190px', width: '100%' }} src="./assets/images/danger-texting-driving.jpg" />
                <Card.Content>
                  <Card.Header>
                    Matthew
                  </Card.Header>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
              </Card>
              <Card fluid style={{ height: '258px' }}>
                <ImageFrame style={{ height: '190px', width: '100%' }} src="./assets/images/danger-texting-driving.jpg" />
                <Card.Content>
                  <Card.Header>
                    Matthew
                  </Card.Header>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
              </Card>
            </Card.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </Container>
);

export default ShowCases;
