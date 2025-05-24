import { RouterLink } from "speedy-jsx";
import { Container, Title, NavButton } from "../styles/CommonStyles";

export default (
  <Container>
    <Title>欢迎使用 Speedy-JSX</Title>
    <p>这是一个使用 Speedy-JSX 构建的路由示例应用</p>
    <RouterLink to="/counter">
      <NavButton>前往计数器</NavButton>
    </RouterLink>
    <RouterLink to="/about">
      <NavButton>关于我们</NavButton>
    </RouterLink>
  </Container>
);
