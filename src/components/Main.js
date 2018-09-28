/* This is the main body of the application */
import React from 'react';
import Header from './Header';
import Shelf from './Shelf';
import SearchComponent from './SearchComponent';

const Main = (props) => {
 const {shelvedBooks} = props;
    return(
        <div>
            <Header />
            <Shelf shelvedBooks={shelvedBooks} />
            <SearchComponent />
        </div>
        
    )
}

export default Main;
