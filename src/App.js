import React from 'react';
import { Route } from 'react-router-dom';

import LoginPage from "./components/pages/LoginPage";
import HomePage from "./components/pages/HomePage";

const App = () => (
  <div className="ui container">
    <Route path="/" exact component={HomePage} />
    <Route path="/login" exact component={LoginPage} />
  </div>
);

export default App;
