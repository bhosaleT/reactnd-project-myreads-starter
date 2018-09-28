import React from "react";

const ShelfChanger = props => {
  const books = props.books;
  const onChangeShelf = props.onChangeShelf;
  let currentShelf = "none";
  
  return (
    <div className="book-shelf-changer">
      <select
        onChange={event => onChangeShelf(props.book, event.target.value)}
        defaultValue={currentShelf}
      >
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
