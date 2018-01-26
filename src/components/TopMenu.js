import React, { Component } from 'react';
import {
  Menu,
  Container,
  Header,
  Image,
} from 'semantic-ui-react';

class TopMenu extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return (
      <Container>
        <Menu pointing secondary>
          <Menu.Item as="div">
            <Header as="h1" >
              <Image
                src="/assets/images/logo.svg"
                size="small"
                href="http://zhenxi.design"
                alt="Zhenxi Mi's Portfolio"
              />
            </Header>
          </Menu.Item>
          <Container>
            <Menu.Menu position="right">
              <Menu.Item name="project" active={activeItem === 'project'} onClick={this.handleItemClick}>
                Projects
              </Menu.Item>
              <Menu.Item name="about" active={activeItem === 'about'} onClick={this.handleItemClick}>
                About
              </Menu.Item><Menu.Item as="a" >Resume</Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>
      </Container>
    );
  }
}
export default TopMenu;
