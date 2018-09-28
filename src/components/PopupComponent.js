import React from 'react';
import Popup from 'reactjs-popup';

const PopupComponent = () =>(
    <Popup
        trigger={<button className="trigger-button">Search terms</button>}
        position="left top"
    >
        <div className="popup-message">
            Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen',
            'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief',
            'Business', 'Camus', 'Cervantes', 'Christie', 'Classics',
            'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design',
            'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas',
            'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First',
            'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer',
            'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri',
            'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage',
            'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting',
            'Philosophy', 'Photography', 'Poetry', 'Production',
            'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling',
            'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming',
            'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual
            Reality', 'Web Development', 'iOS'
            </div>
    </Popup>
)

export default PopupComponent;