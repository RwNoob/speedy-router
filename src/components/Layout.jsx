import { RouterView, RouterLink } from "speedy-jsx";
import {
  AppContainer,
  Header,
  Nav,
  NavItem,
  Main,
  Footer,
} from "../styles/LayoutStyles";

export default (
  <AppContainer>
    <Header>
      <Nav>
        <NavItem>
          <RouterLink to="/">首页</RouterLink>
        </NavItem>
        <NavItem>
          <RouterLink to="/counter">计数器</RouterLink>
        </NavItem>
        <NavItem>
          <RouterLink to="/about">关于</RouterLink>
        </NavItem>
      </Nav>
    </Header>
    <Main>
      <RouterView />
    </Main>
    <Footer>
      <p>Speedy-JSX 路由示例 © 2025</p>
    </Footer>
  </AppContainer>
);
