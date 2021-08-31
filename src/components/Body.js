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
    render () {
        return (
            <div>
                <Switch>
                    <Route exact path="/" render={() => <Redirect to={`/search/${this.props.topic}`} /> } /> 
                    <Route path="/search/:topic" render={() => <Gallery topic={this.props.topic} photos={this.props.photos} />} /> {/* main gallery */}
                    <Route exact path="/noresults" component={NotFound} /> {/* error messaging for no images found */}
                    <Route exact path="/404" component={SearchError} /> {/* error messaging for error in API call */}
                    <Route component={NotFound} /> {/* fallback error messaging for url not found */}
                </Switch>
            </div>
        );
    }
}

export default withRouter(Body);
