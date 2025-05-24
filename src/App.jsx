import { Router } from "speedy-jsx";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { setupGlobalStyles } from "./styles/GlobalStyles";

setupGlobalStyles();

const routes = [
  { path: "/", component: Home },
  { path: "/counter", component: Counter },
  { path: "/about", component: About },
  { path: "/404", component: NotFound },
];

export default (
  <Router routes={routes}>
    <Layout />
  </Router>
);
