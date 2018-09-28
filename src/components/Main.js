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
      <Shelf
        currentlyReading={currentlyReading}
        wantToRead={wantToRead}
        read={read}
        onChangeShelf={onChangeShelf}
      />
      <SearchComponent />
    </div>
  );
};

export default Main;

Main.propTypes = {
  shelvedBooks: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired
}