import CourseDetailPage from "../containers/CourseDetail";
import CoursePage from "../containers/HomeTemplate/CoursePage";
import HomePage from "../containers/HomeTemplate/HomePage";
import TestPage from "../containers/HomeTemplate/TestPage";
import LoginForm from "../containers/LoginForm";
import SignUpForm from "../containers/SignUpForm";

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
  {
    exact: true,
    path: '/course/:id',
    component: CoursePage,
  },
  {
    exact: true,
    path: '/login',
    component: LoginForm
  },
  {
    exact: true,
    path: '/signup',
    component: SignUpForm
  },
  {
    exact: true,
    path: '/detail/:courseId',
    component: CourseDetailPage
  }
]

export { routesHome }