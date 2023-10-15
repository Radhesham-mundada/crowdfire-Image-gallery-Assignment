import React, { useState, useEffect } from 'react';
import { fetchImageList, fetchImageInfo } from '../../services/imageServices';
import { toast } from 'react-toastify';
import ImagePopup from '../ImagePopup/ImagePopup';
import 'react-toastify/dist/ReactToastify.css';
import './ImageGalleryList.css'

const ImageGallery = () => {
    const [loading, setLoading] = useState(true);
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [popupVisible, setPopupVisible] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchImageList();
                setImages(data);
                setLoading(false);
                toast.success('Images loaded successfully');
            } catch (error) {
                toast.error('Error occurred while fetching images list');
            }
        };

        fetchData();
    }, []);


    const handleImageClick = (imageId) => {
        fetchImageInfo(imageId)
            .then((data) => {
                setSelectedImage(data);
                setPopupVisible(true);
            })
            .catch((error) => {
                toast.error('Error occurred while fetching image details');
            });
    };

    const closePopup = () => {
        setSelectedImage(null);
        setPopupVisible(false);
    };

    return (
        <div className="image-gallery">
            <h2 className="image-gallery-title">Image Gallery</h2>
            {loading ? (
                <div className="loader">Loading...</div>
            ) : (
                <div className="image-grid">
                    {images.map((image) => (
                        <div
                            className="image-item"
                            key={image.id}
                            onClick={() => handleImageClick(image.id)}
                        >
                            <img
                                src={image.download_url}
                                alt={image.author}
                                className="image"
                            />
                        </div>
                    ))}
                </div>
            )}
            {popupVisible && (
                <ImagePopup image={selectedImage} onClose={closePopup} />
            )}

            <div className='Assignment'>Image Gallery Assignment By - Radhesham Mundada</div>
        </div>
    );
};

export default ImageGallery;
