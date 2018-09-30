import React from "react";
import ShelfChanger from "./ShelfChanger";
import PropTypes from "prop-types";
import StarRatingComponent from "react-star-rating-component";
import noCover from '../images/NoBookCover.png';

const Book = props => {
  /* Destructing the props object and getting the shelfedBooks from it.
  -- Was having trouble with books that dont have imageLinks so I just filtered those books out in this component
  -- Could have done in previous components, I just did it here. because i encountered the problem here.
  */
  const book = props.book;
  const onChangeShelf = props.onChangeShelf;
  const cover = book.imageLinks ? book.imageLinks.thumbnail : noCover;
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${cover} )`
          }}
        />
        <ShelfChanger book={book} onChangeShelf={onChangeShelf} />
      </div>
      <div className="book-title">{book.title}</div>
      {/* 
                    Checking for multiple authors by mapping over them 
                    */
      book.authors &&
        book.authors.map((author, index) => (
          <div className="book-authors" key={index}>
            {author}
          </div>
        ))}
      <div className="book-rating">
        {book.averageRating !== undefined ? (
          <StarRatingComponent
            name="rate1"
            starCount={5}
            value={book.averageRating}
            editing={false}
            emptyStarColor={"#d3d3d3"}
            starColor={"#272727"}
          />
        ) : (
          <StarRatingComponent
            name="rate2"
            starCount={5}
            value={0}
            editing={false}
            emptyStarColor={"#d3d3d3"}
            starColor={"#272727"}
          />
        )}
      </div>
    </div>
  );
};

export default Book;
Book.propTypes = {
  book: PropTypes.object.isRequired,
  onChangeShelf: PropTypes.func.isRequired
};
