import React, { FunctionComponent } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import ProductList from './containers/ProductList/ProductList';
import ProductForm from './containers/ProductForm/ProductForm';

const App: FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ProductList />
        </Route>
        <Route path="/edit">
          <ProductForm />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router >
  );
}

export default App;
