import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <div className='header'>
            <h2>Header</h2>
            <nav className='navigation'>
                <ul>
                    <li>
                        <Link to="/">Main Page</Link>
                    </li>
                    <li>
                        <Link to="/page1">Page 1</Link>
                    </li>
                    <li>
                        <Link to="/page2">Page 2</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
