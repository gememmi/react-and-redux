import ImageShow from "./ImageShow";
import './ImageList.css';

function ImageList({ images }){
    const renderedImages  = images.map((image) => {
        return <ImageShow key ={image.id} image={image} />;
    })

    return <div className="image-list">{ renderedImages }</div>;
}

export default ImageList

// Why do we need have an key? When applying an update to the state and DOM, we can apply the minimal set of changes to the existing DOM. React will compare the keys from the previous render
// Add key to the top most JSX element in the list
// Must be a string or a number
// Should be unique for this list
// Should be consistent across all rerenders
