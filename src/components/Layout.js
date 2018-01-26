import React, { Component } from 'react';
import {
  Segment,
  Visibility,
} from 'semantic-ui-react';

import FixedMenu from './FixedMenu';
import TopMenu from './TopMenu';
import ShowCases from './ShowCases';
import Footer from './Footer';
import AboutMe from './AboutMe';
import OpeningIntro from './OpeningIntro';

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
            textAlign="center"
            style={{ padding: '1em 0em' }}
            vertical
          >
            <TopMenu />
          </Segment>
        </Visibility>
        <OpeningIntro />
        <ShowCases />
        <AboutMe />
        <Footer />
      </div>
    );
  }
}
