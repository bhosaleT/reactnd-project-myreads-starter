import React from "react";
import "../css/App.css";
import { Route, Switch } from 'react-router-dom';
import Main from "./Main";
import SearchPage from "./SearchPage";
import NotFound from "./NotFound";

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/search" component={SearchPage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
