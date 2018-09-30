/* This is the main body of the application */
import React from "react";
import Header from "./Header";
import Shelf from "./Shelf";
import SearchComponent from "./SearchComponent";
import PropTypes from 'prop-types';


const Main = props => {
  const { shelvedBooks, onChangeShelf } = props;
  /* DIVIDING THE BOOKS RECEIVED FROM SHELVEDBOOKS INTO INDIVIDUAL SHELVES 
 - currentlyReading.
 - wantToRead.
 - read
 */
  const currentlyReading = shelvedBooks.filter(
    book => book.shelf === "currentlyReading"
  );
  const wantToRead = shelvedBooks.filter(book => book.shelf === "wantToRead");
  const read = shelvedBooks.filter(book => book.shelf === "read");
//   console.log(currentlyReading);

  return (
    <div className="list-books">
      <Header />
      <div className="list-books-content">
      <Shelf
        books={currentlyReading} 
        title="Currently Reading"
        onChangeShelf={onChangeShelf}
      />
        <Shelf
          books={wantToRead}
          title="Want to Read"
          onChangeShelf={onChangeShelf}
        />
        <Shelf
          books={read}
          title="Read"
          onChangeShelf={onChangeShelf}
        />
      </div>
      <SearchComponent />
    </div>
  );
};

export default Main;

Main.propTypes = {
  shelvedBooks: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired
}