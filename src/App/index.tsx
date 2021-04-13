import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../_store';
import Header from '../_ui/Header';
import Footer from '../_ui/Footer';
import Routes from '../Routes';
import '../_styles/style.less';

/**
 * APP Component
 */
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>

        <Header />

        <Routes />

        <Footer />
        
      </BrowserRouter>
    </Provider>
  );
};

export default App;
