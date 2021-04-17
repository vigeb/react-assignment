import { Route } from 'react-router-dom'
import HeaderHome from "../../components/Header/HeaderHome"

const HomeLayout = (props) => {
  return (
    <>
      <HeaderHome />
      {props.children}
    </>
  )
}

const HomeTemplate = ({ Component, ...props }) => {
  return (
    <Route
      {...props}
      render={(propsComponent) => (
        <HomeLayout>
          <Component {...propsComponent} />
        </HomeLayout>
      )}
    />
  );
}
 
export default HomeTemplate;