import React from 'react';

//loading icon from giphy.com

const Loading = () => (
    <div>
        <iframe src="https://giphy.com/embed/xTk9ZvMnbIiIew7IpW" width="100%" height="100%" style={{position : "relative"}} frameBorder="0" className="giphy-embed" allowFullScreen title="spinner" />
        <p
        ><a href="https://giphy.com/gifs/loop-loading-loader-xTk9ZvMnbIiIew7IpW">Loading... (via GIPHY)</a>
        </p>
    </div>
)
export default Loading;