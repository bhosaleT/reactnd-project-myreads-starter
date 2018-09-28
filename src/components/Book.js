import React from "react";
import ShelfChanger from "./ShelfChanger";

const Book = props => {
  /* Destructing the props object and getting the shelfedBooks from it.
  TODO: setup the state to get books from the API and then pass it into this component.
  */
  const { shelvedBooks } = props;
  return (
    <div className="bookshelf-books">
      <ol className="books-gird">
        {/* 
         -- Loop over shelfedBooks and then show them   
         */
        shelvedBooks.length > 0 &&
          shelvedBooks.map(book => (
            <li key={book.id}>
              <div className="book">
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                      backgroundImage: `url(${book.imageLinks.thumbnail})`
                    }}
                  />
                  <ShelfChanger />
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
              </div>
            </li>
          ))}
      </ol>
    </div>
  );
};

export default Book;
