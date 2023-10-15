import React from 'react';
import './Imagepopup.css'

const ImagePopup = ({ image, onClose }) => (
    <div className="image-popup">
        <div className="image-details">
            <img src={image.download_url} alt={image.author} className="img-responsive" />
            <div className="text-details">
                <h2>Author: {image.author}</h2>
                <p>Dimensions: {image.width}x{image.height}</p>
                <div>
                    <button className="close-button" onClick={onClose}>
                        Close
                    </button>
                </div>
            </div>

        </div>
    </div>
);

export default ImagePopup;
