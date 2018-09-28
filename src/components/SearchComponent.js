/* This is the search icon compomnent */
import React from 'react';
import { Link } from 'react-router-dom';


const SearchComponent = () => (
    <div className="open-search">
    <Link to="/search"> Add a book </Link>
    </div>
)

export default SearchComponent;