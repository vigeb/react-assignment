import { Route } from 'react-router-dom'
import Header from "../../components/Header"

const HomeLayout = (props) => {
  console.log(props.children)
  return (
    <>
      <Header />
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