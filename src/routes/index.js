import HomePage from "../containers/HomeTemplate/HomePage";
import TestPage from "../containers/HomeTemplate/TestPage";

const routesHome = [
  {
    exact: true,
    path: '/',
    component: HomePage,
  },
  {
    exact: true,
    path: '/test',
    component: TestPage,
  },
]

export { routesHome }