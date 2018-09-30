import React from "react";
import { Link } from "react-router-dom";
import PopupComponent from "./PopupComponent";
import Book from "./Book";
import * as BooksAPI from "../utils/BooksAPI";
import PropTypes from "prop-types";

class SearchPage extends React.Component {
  state = {
    query: "",
    searchedBooks: [],
    searchError: false
  };
  /* TODO: 
        1. use the booksApi to search for books 
        2. Add that to a results array 
        3. Add that array to state 
        4. forward that state to Book Component.
        5. Also add a state for SearchError to keep track if no books came back.
        6. if no books came back show an error.
        */
  //  console.log(this.state.query)
  /* Search books function
-- takes in a query from onChange.
-- setState it to query {Controlled Component}
-- if(query) exists search using BooksAPI add the returned results to searchedBooks else set it to empty array.
*/

  searchBooks = event => {
    const queryVariable = event.target.value;
    this.setState({
      query: queryVariable
    });

    let searchResults = [];

    if (queryVariable) {
      BooksAPI.search(queryVariable.trim()).then(books => {
        if (books && books.length) {
          searchResults = books.map(book => {
            book.shelf = this.addToShelf(book);
            return book;
          });
          this.setState({
            searchedBooks: searchResults,
            searchError: false
          });
        } else {
          this.setState({
            searchedBooks: [],
            searchError: true
          });
        }
      });
    } else {
      this.setState({
        searchedBooks: [],
        searchError: false
      });
    }

    // console.log(this.state.searchedBooks);
  };
  /* 
  -- we get books back from the API search. Loop over those books
  -- check if the new searchedBook exists in our shelvedBooks.
  -- if it exists return its shelf value else return shelf value as none.
  */
  addToShelf(book) {
    let hasShelf = this.props.shelvedBooks.filter(
      filteredBook => filteredBook.id === book.id
    );
    return hasShelf.length
      ? // console.log(hasShelf[0].shelf)
        hasShelf[0].shelf
      : "none";
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            &gt; Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={this.searchBooks}
            />
          </div>
        </div>
        <div className="search-books-results">
          {this.state.searchedBooks.length > 0 && (
            <div>
              <div>
                <h3>Search returned {this.state.searchedBooks.length}</h3>
              </div>
              <ol className="books-grid">
                {this.state.searchedBooks.map(book => (
                  <Book
                    key={book.id}
                    book={book}
                    onChangeShelf={this.props.onChangeShelf}
                  />
                ))}
              </ol>
            </div>
          )}
          {this.state.searchError && <h3>No Books found. Try Again</h3>}
          <PopupComponent />
        </div>
      </div>
    );
  }
}

export default SearchPage;

SearchPage.propTypes = {
  onChangeShelf: PropTypes.func.isRequired
};
