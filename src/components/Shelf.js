import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";
/* 
-- Individual shelfs created for currentlyReading, wantToRead, Read and passing those props into it.
-- Loading component is a simple component which creates a simple loading screen type animation.
*/

const Shelf = props => {
  const books = props.books;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book, index) => (
            <Book book={book} key={index} onChangeShelf={props.onChangeShelf} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;
Shelf.propTypes = {
  onChangeShelf: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired
};
