import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FAQPage extends Component {
    render() {
        return (
            <>
                <div>
                    <label>What is a magnet?</label>
                    <p>A Magnet is a post created by a parent that is than displayed on the message board, (AKA the fridge)</p>
                </div>
                <div>
                    <label>What is a fridge?</label>
                    <p>A fridge is the message board where you can stick posts, (AKA magnets)</p>
                </div>
                <Link to='/index'>Close</Link>
            </>
        )
    }
}

export default FAQPage;