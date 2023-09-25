import { useState } from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import searchImages from './api';

function App({}){
    const [images, setImages] = useState([])
   
    const handleSubmit = async (term) => {
        const result = await searchImages(term);

        setImages(result)
    };


    return <div>
        <SearchBar onSubmit= {handleSubmit} />
        <ImageList images={images} />
    </div>
}

export default App

// USING ASYNC AWAIT:
// We need to tell JavaScript that it should wait to run this function until the fetch is done running. 