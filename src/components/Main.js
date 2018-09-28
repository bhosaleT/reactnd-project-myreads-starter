/* This is the main body of the application */
import React from 'react';
import Header from './Header';
import Shelf from './Shelf';
import SearchComponent from './SearchComponent';

const Main = (props) => {

    return(
        <div>
            <Header />
            <Shelf />
            <SearchComponent />
        </div>
        
    )
}

export default Main;
