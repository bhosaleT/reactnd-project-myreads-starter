import React from "react";

const ShelfChanger = props => {
  const books = props.books;
  let currentShelf = "none";

  //if book is in current list set current shelf to book.shelf or else set it to none.
  for (let b of books) {
    if (b.id === props.book.id) {
      currentShelf = b.shelf;
      break;
    }
  }

  return (
    <div className="book-shelf-changer">
      <select defaultValue={currentShelf}>
        <option value="none" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};
export default ShelfChanger;
