import React, {Component} from 'react';
import {NavLink,
    withRouter
} from 'react-router-dom';

class Nav extends Component {
    handleNav = (e) => {        
        this.props.onNav(e.target.textContent.toLowerCase());
    }

    render () {
        return (
            <nav className="main-nav">
                <ul>
                    <li><NavLink to="/search/cats" onClick={this.handleNav}>Cats</NavLink></li>
                    <li><NavLink to="/search/dogs" onClick={this.handleNav}>Dogs</NavLink></li>
                    <li><NavLink to="/search/unicorns" onClick={this.handleNav}>Unicorns</NavLink></li>
                </ul>
            </nav>
        )
    }
}

export default withRouter(Nav);