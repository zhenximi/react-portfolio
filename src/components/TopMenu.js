import React from 'react';
import {
  Menu,
  Container,
  Header,
  Image,
} from 'semantic-ui-react';

const TopMenu = () => (
  <Container>
    <Menu secondary>
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
          <Menu.Item
            name="project"
            as="a"
            href="#projects"
          >
            Projects
          </Menu.Item>
          <Menu.Item
            name="about"
            as="a"
            href="#about"
          >
            About
          </Menu.Item><Menu.Item as="a" >Resume</Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  </Container>
);
export default TopMenu;
