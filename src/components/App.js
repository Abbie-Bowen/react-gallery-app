import React, {Component} from 'react'
import axios from 'axios';
// import {
//     BrowserRouter,
//     Route,
//     Switch
// } from 'react-router-dom'

//components
import Gallery from './Gallery';
import Header from './Header';
import Nav from './Nav';
import NotFound from './NotFound';

//API 
import apiKey from '../config';

class App extends Component {

    constructor() {
        super();
        this.state = {
            photos: []
        };
    }

    componentDidMount () {
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&per_page=24&format=json&nojsoncallback=1`)
            .then(response => {
                this.setState({
                    photos: response.data.photos.photo
                });
            }).catch(error => {
                console.log('Error fetching and parsing data', error);
            });

    }

    render () {
        console.log(this.state.photos)
        return (
            <div className="container">
                <Header />
                {/* <Nav /> */}
                <Gallery photos={this.state.photos}/>
                {/* <NotFound /> */}
            </div>
        );
    }
}
export default App;
