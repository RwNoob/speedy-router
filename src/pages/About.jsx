import { RouterLink } from "speedy-jsx";
import { Container, Title, NavButton } from "../styles/CommonStyles";

export default (
  <Container>
    <Title>关于</Title>
    <p>这是一个使用 Speedy-JSX 构建的示例应用，展示了路由系统的基本用法。</p>
    <p>
      Speedy-JSX 是一个响应式 JavaScript 框架，提供虚拟
      DOM、组件系统、状态管理和路由功能。
    </p>
    <RouterLink to="/">
      <NavButton>返回首页</NavButton>
    </RouterLink>
  </Container>
);
