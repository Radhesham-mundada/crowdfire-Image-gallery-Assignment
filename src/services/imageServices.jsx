import axios from 'axios';

const BASE_URL = 'https://picsum.photos/';

export const fetchImageList = async () => {
    try {
        const imageListResponse = await axios.get(`${BASE_URL}/v2/list`);
        return imageListResponse.data;
    } catch (error) {
        throw error;
    }
};

export const fetchImageInfo = async (imageId) => {
    try {
        const imageInfoResponse = await axios.get(`${BASE_URL}/id/${imageId}/info`);
        return imageInfoResponse.data;
    } catch (error) {
        throw error;
    }
};