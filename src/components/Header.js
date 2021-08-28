import React from 'react';

import SearchForm from './SearchForm';
import Nav from './Nav';

const Header = (props) => (
            <div className="title">
                <h1>Photo Gallery</h1>
                <SearchForm onSearch = {props.updateImages} />
                <Nav onNav = {props.updateImages}/>
            </div>
)

export default Header;

                