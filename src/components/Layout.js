import React, { Component } from 'react';
import {
  Card,
  Container,
  Grid,
  Segment,
  Visibility,
} from 'semantic-ui-react';

import FixedMenu from './FixedMenu';
import TopMenu from './TopMenu';
import ImageFrame from './ImageFrame';

export default class HomepageLayout extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ visible: false })
  showFixedMenu = () => this.setState({ visible: true })

  render() {
    const { visible } = this.state;

    return (
      <div>
        { visible ? <FixedMenu /> : null }

        <Visibility
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}
        >
          <Segment
            textAlign='center'
            style={{ padding: '1em 0em' }}
            vertical
          >
            <TopMenu />
          </Segment>
        </Visibility>

        <Segment basic>
          <Container>
            <Grid>
              <Grid.Row stretched >
                <Grid.Column width={10} >
                  <Card fluid style={{ height: '540px' }} >
                    <ImageFrame style={{ height: 'calc(100vh - 300px)', width: '100%' }} src="./assets/images/danger-texting-driving.jpg" />
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
                      <ImageFrame style={{ height: '170px', width: '100%' }} src="./assets/images/danger-texting-driving.jpg" />
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
                      <ImageFrame style={{ height: '170px', width: '100%' }} src="./assets/images/danger-texting-driving.jpg" />
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
          </Container>
        </Segment>
      </div>
    )
  }
}
