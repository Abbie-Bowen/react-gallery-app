import React from 'react';

import SearchForm from './SearchForm';
import Nav from './Nav';

const Header = (props) => (
            <div className="title">
                <h1>Photo Gallery</h1>
                <SearchForm newSearch={props.newSearch} />
                <Nav newSearch={props.newSearch}/>
            </div>
)

export default Header;

                