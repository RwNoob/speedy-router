import { styled } from "speedy-jsx";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Header = styled.header`
  background-color: white;
  padding: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-bottom: 2rem;
`;

export const Nav = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  justify-content: center;
`;

export const NavItem = styled.li`
  margin: 0 1rem;
  font-weight: 500;

  & a {
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #f0f0f0;
    }

    &.active {
      color: #2196f3;
      font-weight: bold;
    }
  }
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 0 1rem;
`;

export const Footer = styled.footer`
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
  color: #666;
  font-size: 0.9rem;
`;
