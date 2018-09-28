import React from "react";
import Book from "./Book";
import Loading from "./Loading";
import PropTypes from 'prop-types';
/* 
-- Individual shelfs created for currentlyReading, wantToRead, Read and passing those props into it.
-- Loading component is a simple component which creates a simple loading screen type animation.
*/

const Shelf = props => (
  <div className="list-books-content">
    <div>
      {/* Bookshelf for currentlyReading uses props.currentlyReading*/}
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        {props.currentlyReading.length > 0 ? (
          <Book
            onChangeShelf={props.onChangeShelf}
            shelvedBooks={props.currentlyReading}
          />
        ) : (
          <Loading />
        )}
      </div>
      {/* Bookshelf for wantToRead uses props.wantToRead*/}
      <div className="bookshelf">
        <h2 className="bookshelf-title">Want To Read</h2>
        {props.wantToRead.length > 0 ? (
          <Book
            onChangeShelf={props.onChangeShelf}
            shelvedBooks={props.wantToRead}
          />
        ) : (
          <Loading />
        )}
      </div>
      {/* Bookshelf for read uses props.read*/}
      <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
        {props.read.length > 0 ? (
          <Book onChangeShelf={props.onChangeShelf} shelvedBooks={props.read} />
        ) : (
          <Loading />
        )}
      </div>
    </div>
  </div>
);

export default Shelf;
Shelf.propTypes = {
  onChangeShelf: PropTypes.func.isRequired,
  currentlyReading: PropTypes.array.isRequired,
  wantToRead: PropTypes.array.isRequired,
  read: PropTypes.array.isRequired
}