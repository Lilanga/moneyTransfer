import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import withReduxSaga from 'next-redux-saga'
import withRedux from 'next-redux-wrapper';
import configureStore from '../store/configureStore';

class app extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(configureStore)(withReduxSaga(app));