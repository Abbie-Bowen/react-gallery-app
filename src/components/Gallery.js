import React, {Component} from 'react';
import Photo from './Photo';
import {withRouter} from 'react-router';

class Gallery extends Component {
    render () {
        // map over array of photos from API call and create a photo box for each image
        let photos = this.props.photos.map((photo) => {
            return <Photo src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`} alt={photo.title} key={photo.id} />
        });

        return (
            <div className="photo-container">
            <h2>Results for {this.props.topic}</h2>
                <ul>
                    {photos}
                </ul>
            </div>
        );
    }
}

export default withRouter(Gallery);