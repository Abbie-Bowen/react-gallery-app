import React, {Component} from 'react'
import {
    Redirect,
    withRouter
} from 'react-router-dom'
import axios from 'axios';

//API 
import apiKey from '../config';

//components
import Body from './Body';
import Header from './Header';
import Loading from './Loading';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: "",
            photos: [],
            loading: true
        };

        this.performSearch= this.performSearch.bind(this);
    }

    
    componentDidMount() {
        this.performSearch();
    }

    performSearch = (query = "nature") => {
        this.setState({
            loading: true,
        });
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
        .then(response => {
            if (response.data.photos.photo.length > 0) {
            this.setState({
                searchString: query,
                photos: response.data.photos.photo,
                loading: false,
            });
        } else {
            this.setState({loading: false});
            this.props.history.push("/noresults");
        }
        }).catch(error => {
            console.log('Error fetching and parsing data', error);
            this.setState({loading: false});
            this.props.history.push("/404");
        });
    }

    render () {
            return (
                <div>
                    <Header newSearch={this.performSearch}/>
                    {this.state.loading? <Loading />
                        : <Body topic={this.state.searchString} photos={this.state.photos} getNewImages={this.performSearch}/> }
                </div>
            )
        }
}

export default withRouter(App);
