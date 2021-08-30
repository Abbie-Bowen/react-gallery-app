import React, {Component} from 'react';
import Photo from './Photo';
import {withRouter} from 'react-router';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerTopic: this.props.topic
        }
    }

    componentDidUpdate() {
        if ((this.props.urlTopic) && (this.props.urlTopic !== this.props.topic)) {
            this.setState({headerTopic: this.props.urlTopic});
            this.props.getNewImages(this.props.urlTopic);
        } 
    }

    render () {
        let photos = this.props.photos.map((photo) => {
            return <Photo src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`} alt={photo.title} key={photo.id} />
        });

        return (
            <div className="photo-container">
            <h2>Results for {this.state.headerTopic}</h2>
                <ul>
                    {photos}
                </ul>
            </div>
        );
    }
}

export default withRouter(Gallery);