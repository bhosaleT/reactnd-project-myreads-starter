import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";
import Loading from "./Loading";
/* SHELF COMPONENT */

const Shelf = props => {
  const books = props.books;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.length ? (
            books.map((book, index) => (
              <Book
                book={book}
                key={index}
                onChangeShelf={props.onChangeShelf}
              />
            ))
          ) : (
            <Loading />
          )}
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
