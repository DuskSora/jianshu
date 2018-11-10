import React, { PureComponent, Fragment } from 'react';
import Header from './common/header';
import { GlobalStyle } from './style';
import { IconfontGlobalStyle } from './statics/iconfont/iconfont';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail/LoadableDetail';
import Login from './pages/login';
import Write from './pages/write';
import store from './store';
import { Provider } from 'react-redux';

class App extends PureComponent {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <IconfontGlobalStyle />
        <Provider store={store}>
            <BrowserRouter>
              <Fragment>
                <Header />
                <Route path="/" exact component={Home}></Route>
                <Route path="/detail/:id" exact component={Detail}></Route>
                <Route path="/login" exact component={Login}></Route>
                <Route path="/write" exact component={Write}></Route>
              </Fragment>
            </BrowserRouter>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
