import React, {Component} from 'react'
import axios from 'axios';
import {
    Route,
    Redirect,
    Switch,
    withRouter
} from 'react-router-dom'

//components
import Gallery from './Gallery';
import NotFound from './NotFound';
import Header from './Header';
import Loading from './Loading';

//API 
import apiKey from '../config';

class App extends Component {

    constructor() {
        super();
        this.state = {
            photos: [],
            searchString: '',
            loading: true
        };
    }

    componentDidMount() {
        this.performSearch();
    }

    componentDidUpdate(prevProps) {
        console.log(this.props.location.pathname);
        console.log(prevProps.location.pathname);
        // if (this.props.location.pathname !== prevProps.location.pathname) {
        //   this.performSearch();
        // }
    }


    performSearch = (query="nature") => {
        this.setState({
            loading: true,
            searchString: query
        });
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
        .then(response => {
            this.props.history.push(`/search/${query}`);
            this.setState({
                photos: response.data.photos.photo,
                loading: false });

        }).catch(error => {
            console.log('Error fetching and parsing data', error);
            this.setState({loading: false});
            this.props.history.push("/404");
        });
    }

   render () {

        let loadingPage;
        if (this.state.loading) {
            loadingPage = <Loading />;
        } else {
            loadingPage = "";
        }

        let noResults;
        if (this.state.photos.length === 0 && !this.state.loading) {
            noResults = <Redirect to="/404" />;
        } else {
            noResults = "";
        }

            return (
                <div className="container">
                    <Header updateImages={this.performSearch.bind(this)}/>
                    {loadingPage}
                    {noResults}
                    <Switch>
                        <Route path="/search/:topic" render= {() => <Gallery  photos={this.state.photos} topic={this.state.searchString} />} />
                        <Route exact path="/404" component={NotFound} />
                    </Switch>
                </div>
            );
        }
}
export default withRouter(App);
