import { RouterLink } from "speedy-jsx";
import { Container, Title, NavButton } from "../styles/CommonStyles";

export default (
  <Container>
    <Title>404 - 页面未找到</Title>
    <p>您访问的页面不存在</p>
    <RouterLink to="/">
      <NavButton>返回首页</NavButton>
    </RouterLink>
  </Container>
);
