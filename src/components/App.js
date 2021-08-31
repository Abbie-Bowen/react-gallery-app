import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
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
            loading: true,
        };

        this.performSearch= this.performSearch.bind(this);
    }

    //performs initial API call to fetch images when page loads
    componentDidMount() {
        this.performSearch();
    }

    //compares the current url search term to the current searchString state and fetches new images if they don't match
    componentDidUpdate() {
        if (this.state.searchString) {
            let location = this.props.location.pathname;
            if (location.includes("search")) {
                let urlTopic = location.slice(8);
                if (urlTopic !== this.state.searchString) {
                    this.performSearch(urlTopic);
                }
            } 
        }
    }

    //makes API call to flickr using search query
    performSearch = (query = "nature") => {
        this.setState({
            loading: true,
            searchString: null,
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
            this.setState({
                loading: false,
                searchString: "noresults"
            });
            this.props.history.replace("/noresults");
        }
        }).catch(error => {
            console.log('Error fetching and parsing data', error);
            this.setState({loading: false});
            this.props.history.replace("/404");
        });
    }

    render () {
            return (
                <div>
                    {/* Renders header that contains search bar and navigation buttons */}
                    <Header newSearch={this.performSearch}/>
                    {/* Renders main section that contains a loading icon if API is fetching or the body (gallery or error messaging) */}
                    {this.state.loading? <Loading />
                        : <Body topic={this.state.searchString} photos={this.state.photos}/> }
                </div>
            )
        }
}

export default withRouter(App);
