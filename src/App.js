import React, { Component, Fragment } from 'react';
import Header from './common/header';
import { GlobalStyle } from './style';
import { IconfontGlobalStyle } from './statics/iconfont/iconfont';
import store from './store';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <IconfontGlobalStyle />
        <Provider store={store}>
          <Header />
        </Provider>
      </Fragment>
    );
  }
}

export default App;
