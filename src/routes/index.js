import AddCategoryPage from "../containers/AdminTemplate/AddCategoryPage";
import AddNewCoursePage from "../containers/AdminTemplate/AddNewCoursePage";
import CategoryManagePage from "../containers/AdminTemplate/CategoryManagePage";
import CourseManagePage from "../containers/AdminTemplate/CourseManagePage";
import CourseStudentPage from "../containers/AdminTemplate/CourseStudentPage";
import DashboardAdminPage from "../containers/AdminTemplate/DashboardAdminPage";
import EnrollmentPage from "../containers/AdminTemplate/EnrollmentPage";
import StudentManagePage from "../containers/AdminTemplate/StudentManagePage";
import UpdateCategoryPage from "../containers/AdminTemplate/UpdateCategoryPage";
import UpdateCoursePage from "../containers/AdminTemplate/UpdateCoursePage";
import CourseDetailPage from "../containers/CourseDetail";
import VideoCoursePage from "../containers/CourseVideoPage";
import CoursePage from "../containers/HomeTemplate/CoursePage";
import HomePage from "../containers/HomeTemplate/HomePage";
import ProfilePage from "../containers/HomeTemplate/ProfilePage";
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
  },
  {
    exact: true,
    path: '/video',
    component: VideoCoursePage
  },
  {
    exact: true,
    path: '/profile/:uid/:status',
    component: ProfilePage,
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
  {
    exact: true,
    path: '/student-management',
    component: StudentManagePage,
  },
  {
    exact: true,
    path: '/enrollment/:status',
    component: EnrollmentPage,
  },
  {
    exact: true,
    path: '/course/:id',
    component: CourseStudentPage,
  },
]

export { routesHome, routesAdmin }