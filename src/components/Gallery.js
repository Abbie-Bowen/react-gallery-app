import React from 'react';
import Photo from './Photo';

const Gallery = (props) => {
    let photos = props.photos.map((photo) => {
        return <Photo src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`} alt={photo.title} key={photo.id} />
    });

   return (
    <div className="photo-container">
        <h2>Results</h2>
        <ul>
            {photos}
        </ul>
    </div>
   );
}

export default Gallery;