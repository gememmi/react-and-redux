import axios from 'axios';


const searchImages = async (term) => {
   const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID OiBN0KDOpwN-oU8XJxSPBg6jxzEAoj7a5aZ8G0pBSo4'
        },
        params: {
            query: term, 
        }
    });
    console.log(response.data.results);
    return response.data.results;
};

export default searchImages;