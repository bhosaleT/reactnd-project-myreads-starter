import React from "react";
import "../css/App.css";
import { Route, Switch } from "react-router-dom";
import * as BooksAPI from "../utils/BooksAPI";
import Main from "./Main";
import SearchPage from "./SearchPage";
import NotFound from "./NotFound";
import SearchComponent from "./SearchComponent";

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

  /* This function is called to change the shelf 
  -- call the update with newBook and newShelf
  -- change the shelf of the book with new shelf
  -- get filtered list of books which dont contain our new book and then push it on to the array.
  -- set state as filteredBooks.
  */

  onChangeShelf = (newBook, newShelf) => {
    BooksAPI.update(newBook, newShelf).then(() => {
      newBook.shelf = newShelf;

      //filtered list without the new book
      var filteredBooks = this.state.books.filter(
        book => book.id !== newBook.id
      );

      //push the new book to the array.
      filteredBooks.push(newBook);
      this.setState({ books: filteredBooks });
    });
  };

  render() {
    return (
      <div className="app">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Main
                onChangeShelf={this.onChangeShelf}
                shelvedBooks={this.state.books}
              />
            )}
          />

          <Route
            path="/search"
            render={() => (
              <SearchPage
                shelvedBooks={this.state.books}
                onChangeShelf={this.onChangeShelf}
              />
            )}
          />
          <Route component={NotFound} />
        </Switch>
        <SearchComponent />
      </div>
    );
  }
}

export default BooksApp;

/*  ================ APP WORKFLOW =============================
++ componentDidMount() gets the books and they are passed into the Main.js Component.
++ In the main component the books are divided into individual shelves and then forwarded to the Shelf Component
++ Shelf component has 3 different shelves into which individual shelf props are passed.
++ Added searchedBooks state and searchError to get books from the API and then display it.
++ onShelfChange() will take in newBook and the newIntended shelf change the shelf of the book and then get a new array of filteredBooks
   push the new book on it and then setState.
*/
