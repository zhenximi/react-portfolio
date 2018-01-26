import React from 'react';
import {
  Container,
  Header,
  Menu,
} from 'semantic-ui-react';

const FixedMenu = () => (
  <Menu
    fixed="top"
    size="large"
  >
    <Container>
      <Menu.Item as="div">
        <Header as="h1">
          Zhenxi Mi
        </Header>
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item as="a">Project</Menu.Item>
        <Menu.Item as="a">About</Menu.Item>
        <Menu.Item as="a">Resume</Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
);

export default FixedMenu;
