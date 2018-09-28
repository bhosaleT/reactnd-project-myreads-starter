import React from "react";
import Book from "./Book";

const Shelf = props => (
  <div className="list-books-content">
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        {props.currentlyReading.length > 0 && (
          <Book shelvedBooks={props.currentlyReading} />
        )}
      </div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">Want To Read</h2>
        {props.wantToRead.length > 0 && (
          <Book shelvedBooks={props.wantToRead} />
        )}
      </div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
        {props.read.length > 0 && (
          <Book shelvedBooks={props.read} />
        )}
      </div>
    </div>
  </div>
);

export default Shelf;
