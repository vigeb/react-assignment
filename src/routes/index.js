import AddCategoryPage from "../containers/AdminTemplate/AddCategoryPage";
import AddNewCoursePage from "../containers/AdminTemplate/AddNewCoursePage";
import CategoryManagePage from "../containers/AdminTemplate/CategoryManagePage";
import CourseManagePage from "../containers/AdminTemplate/CourseManagePage";
import DashboardAdminPage from "../containers/AdminTemplate/DashboardAdminPage";
import UpdateCategoryPage from "../containers/AdminTemplate/UpdateCategoryPage";
import UpdateCoursePage from "../containers/AdminTemplate/UpdateCoursePage";
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
    path: '/detail/:id',
    component: CourseDetailPage
  }
]

const routesAdmin = [
  {
    exact: true,
    path: '/dashboard',
    component: DashboardAdminPage,
  },
  {
    exact: true,
    path: '/new-course',
    component: AddNewCoursePage,
  },
  {
    exact: true,
    path: '/update-course/:id',
    component: UpdateCoursePage,
  },
  {
    exact: true,
    path: '/course-management',
    component: CourseManagePage,
  },
  {
    exact: true,
    path: '/new-category',
    component: AddCategoryPage,
  },
  {
    exact: true,
    path: '/category-management',
    component: CategoryManagePage,
  },
  {
    exact: true,
    path: '/update-category/:id',
    component: UpdateCategoryPage,
  },
]

export { routesHome, routesAdmin }