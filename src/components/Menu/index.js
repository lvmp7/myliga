import React from 'react';
import {Link} from 'react-router-dom';

import './styles.css';

const Menu = () => {
    return (
        <nav className='menu'>
            <ul>
                <li><Link to="/">Home </Link></li>
                <li><Link to="/rules"> Regulamento </Link> </li>
            </ul>
        </nav>
    );
}

export default Menu;