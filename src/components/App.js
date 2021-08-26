import React, {Component} from 'react'
import axios from 'axios';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom'

//components
import Gallery from './Gallery';
import Nav from './Nav';
import NotFound from './NotFound';
import SearchForm from './SearchForm';

//API 
import apiKey from '../config';

class App extends Component {

    constructor() {
        super();
        this.state = {
            photos: []
        };
    }

    performSearch = (query) => {
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
        .then(response => {
            this.setState({
                photos: response.data.photos.photo
            });
        }).catch(error => {
            console.log('Error fetching and parsing data', error);
        });
    }

   render () {
            return (
                <div className="container">
                    <div className="title">
                        <h1>Photo Gallery</h1>
                        <SearchForm onSearch = {this.performSearch.bind(this)} />
                    </div>
                    {/* <Nav /> */}
                    <Switch>
                        <Route path="/search" render= { () => <Gallery photos={this.state.photos}/>} />
                        <Route path="/no_results" component={NotFound} />
                    </Switch>
                </div>
            );
        }
}
export default App;
