import React, {Component} from 'react'

import {
    Route,
    Switch,
    withRouter,
    Redirect
} from 'react-router-dom'

import NotFound from "./NotFound";
import Gallery from "./Gallery";
import SearchError from "./SearchError";



class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render () {
        return (
            <div>
                <Switch>
                    <Route exact path="/" render={() => <Redirect to={`/search/${this.props.topic}`} /> } />
                    <Route path="/search/:topic" render={({match}) => <Gallery urlTopic={match.params.topic} topic={this.props.topic} photos={this.props.photos} getNewImages={this.props.getNewImages}/>} />
                    <Route exact path="/404" component={SearchError} />
                    <Route exact path="/noresults" component={NotFound} />
                </Switch>
            </div>
        );
    }

}

export default withRouter(Body);
