import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomeTemplate from './containers/HomeTemplate';
import PageNotFound from './containers/PageNotFound';
import { routesHome } from './routes'

function App() {
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
  return (
    <BrowserRouter>
      <Switch>
        {renderRoutesHome(routesHome)}
        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
