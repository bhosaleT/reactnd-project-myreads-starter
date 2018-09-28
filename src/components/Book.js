import React from "react";
import ShelfChanger from './ShelfChanger';
// import ShelfChanger from "./ShelfChanger";

const Book = props => {

  /* Destructing the props object and getting the shelfedBooks from it.
  -- Was having trouble with books that dont have imageLinks so I just filtered those books out in this component
  -- Could have done in previous components, I just did it here. because i encountered the problem here.
  */
 
  const { shelvedBooks } = props;
  const shelvedBooksWithThumbnails = shelvedBooks.filter(
    book => book.imageLinks
  );
  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        {/* 
         -- Loop over shelfedBooks and then show them   
         */
        shelvedBooksWithThumbnails.length > 0 &&
          shelvedBooksWithThumbnails.map(book => (
            <li key={book.id}>
              <div className="book">
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage: `url(${book.imageLinks.thumbnail} )`
                    }}
                  />
                  <ShelfChanger 
                  book = {book}
                  books = {shelvedBooksWithThumbnails}
                  />
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
