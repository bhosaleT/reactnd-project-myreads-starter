/* This is the main body of the application */
import React from "react";
import Header from "./Header";
import Shelf from "./Shelf";
import SearchComponent from "./SearchComponent";

const Main = props => {
  const { shelvedBooks } = props;
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
      />
      <SearchComponent />
    </div>
  );
};

export default Main;
