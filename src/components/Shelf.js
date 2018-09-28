import React from 'react';
import Book from './Book';

const Shelf = (props) =>(
  
    <div>
    <Book shelvedBooks = {props.shelvedBooks} />
    </div>
)

export default Shelf;