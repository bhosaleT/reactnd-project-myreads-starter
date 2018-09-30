/* This is the main body of the application */
import React from "react";
import Shelf from "./Shelf";
import PropTypes from "prop-types";
import Header from "./Header";
import Loading from "./Loading";

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
        {currentlyReading.length > 0 ? (
          <Shelf
            books={currentlyReading}
            title="Currently Reading"
            onChangeShelf={onChangeShelf}
          />
        ) : (
          <Loading />
        )}
        {wantToRead.length > 0 ? (
          <Shelf
            books={wantToRead}
            title="Want to Read"
            onChangeShelf={onChangeShelf}
          />
        ) : (
          <Loading />
        )}
        {read.length > 0 ? (
          <Shelf books={read} title="Read" onChangeShelf={onChangeShelf} />
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default Main;

Main.propTypes = {
  shelvedBooks: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired
};
