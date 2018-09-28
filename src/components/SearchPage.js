import React from "react";
import { Link } from "react-router-dom";

class SearchPage extends React.Component {
    
  searchBooks = query => {
    console.log(`search for the book ${query}`);
    /* TODO: 
        1. use the booksApi to search for books 
        2. Add that to a results array 
        3. Add that array to state 
        4. forward that state to Book Component.
        */
  };

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
              onChange={event => {
                this.searchBooks(event.target.value);
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchPage;
