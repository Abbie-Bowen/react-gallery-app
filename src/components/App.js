import React from 'react-react'
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom'

//components
import SearchForm from './SearchForm';
import Nav from './Nav';
import Gallery from './Gallery';
import NotFound from './NotFound';

//API 
const apiKey = require('../config.js');

function App() {


    return (
        <div class="container">
            <SearchForm />
            <Nav />
            <Gallery />
            <NotFound />
        </div>
    )
}
export default App;
