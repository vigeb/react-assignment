import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomeTemplate from './containers/HomeTemplate';
import AdminTemplate from './containers/AdminTemplate';
import PageNotFound from './containers/PageNotFound';
import { routesHome, routesAdmin } from './routes'
import { connect } from 'react-redux'
import { actLogIn } from './containers/LoginForm/modules/action';
import { useEffect } from 'react'

function App(props) {
  const renderRoutesHome = (routes) => {
    return routes.map((item, index) => {
      return (
        <HomeTemplate
          key={index}
          exact={item.exact}
          path={item.path}
          Component={item.component}
        />
      )
    })
  }
  const renderRoutesAdmin = (routes) => {
    return routes.map((item, index) => {
      return (
        <AdminTemplate
          key={index}
          exact={item.exact}
          path={`/admin${item.path}`}
          Component={item.component}
        />
      )
    })
  }
  const _getCredentialFromLocal = () => {
    const credentialsStr = localStorage.getItem("credentials")
    if (credentialsStr) {
      props.logInUser(JSON.parse(credentialsStr))
    }
  }
  useEffect(() => {
    _getCredentialFromLocal()
  }, [])
  return (
    <BrowserRouter>
      <Switch>
        {renderRoutesHome(routesHome)}
        {renderRoutesAdmin(routesAdmin)}
        <Route path="" component={PageNotFound} />
      </Switch>

    </BrowserRouter>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    logInUser: (userLogIn) => {
      dispatch(actLogIn(userLogIn))
    }
  }
}

export default connect(null, mapDispatchToProps)(App)

