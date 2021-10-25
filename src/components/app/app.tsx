
import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Provider } from "react-redux";
import About from '../about/about';
import Header from '../header/header';
import Home from '../home/home';
import PageNotFound from '../PageNotFound/PageNotFound';
import PersonDetails from '../person-details/person-details';
import './app.scss';
import store from "../../store";

const App = (): JSX.Element => {

  const routes = [
    { path: '/', name: 'Home', Component: Home },
    { path: '/about', name: 'About', Component: About }
  ]

  return (
    <div className="app" data-testid="test-div__app">
      <Provider store={store}>
        <HashRouter basename='/'>
          <Header />
          <TransitionGroup>
            <Switch>
              {routes.map(({ path, Component }) => (
                <Route key={path} exact path={path}>
                  {({ match }) => (
                    <CSSTransition
                      in={match != null}
                      timeout={300}
                      classNames="page"
                      unmountOnExit
                    >
                      <div className="page">
                        <Component />
                      </div>
                    </CSSTransition>
                  )}
                </Route>
              ))}
              <Route path="/details/:id"
                render = {({match}) => {
                  const {id} = match.params;
                  return <PersonDetails selectedId={id} />
                }} />
              <Route component={PageNotFound} />
            </Switch>
          </TransitionGroup>
        </HashRouter>
      </Provider>
    </div>
  )
}

export default App;