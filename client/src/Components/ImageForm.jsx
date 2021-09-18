import React, { useState } from 'react';
import { uploadImage } from '../actions/actions';

const ImageForm = ({handleNewImage}) => {
    const [image, setImage] = useState("");
    const [preview, setPreview] = useState(false);

    const handleImageUpload = (e) => {
        setImage(e.target.files[0]);
        setPreview(true);
    }

    const clearImage = () => {
        setPreview(false);
        setImage("");
    }

    const handleSubmit = () => {
        uploadImage(image);
        setPreview(false);
        setImage("");
        handleNewImage();
    } 

    return (
        <div>
            {
                preview ?
                <div>
                    <button onClick={clearImage}>x</button>
                    <h5>Image Preview</h5>
                    <img src={URL.createObjectURL(image)} alt="Preview of upload"/>
                    <button onClick={handleSubmit}>Upload</button>
                </div> 
                :
                <div>
                    <input type="file" onChange={handleImageUpload} accept="png jpg jpeg" />
                </div>
            }
        </div>
    )
}

export default ImageForm;