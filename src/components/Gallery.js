import React from 'react';
import Photo from './Photo';

const Gallery = (props) => {
    let photos = props.data.map((photo) => {
        return <Photo src={} alt={} />
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