import React from "react";
import "../css/App.css";
import { Route, Switch } from "react-router-dom";
import * as BooksAPI from "../utils/BooksAPI";
import Main from "./Main";
import SearchPage from "./SearchPage";
import NotFound from "./NotFound";

class BooksApp extends React.Component {
  /* This state will keep tracks of all the books. */
  state = {
    books: []
  };

  /* 
    ComponetDidMount life cycle is used to fetch the shelved books from the API 
  -- GetAll returns all the books on my shelves and we add it in the state using setState.
  */
  componentDidMount() {
    BooksAPI.getAll().then(shelvedBooks => {
      this.setState({
        books: shelvedBooks
      });
    });
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" render={()=>(
            <Main
            shelvedBooks={this.state.books}
            />
          )} />
          <Route path="/search" component={SearchPage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
