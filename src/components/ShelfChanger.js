import React from "react";
import PropTypes from "prop-types";

const ShelfChanger = props => {
  const onChangeShelf = props.onChangeShelf;

  return (
    <div className="book-shelf-changer">
      <select
        onChange={event => onChangeShelf(props.book, event.target.value)}
        defaultValue={props.book.shelf}
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
ShelfChanger.propTypes = {
  onChangeShelf: PropTypes.func.isRequired
};
