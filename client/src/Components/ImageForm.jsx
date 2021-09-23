import React, { useEffect, useState } from 'react';
import { uploadImage } from '../actions/actions';
import "../Components/ImageForm.css"

const ImageForm = ({ handleNewImage }) => {
    const [image, setImage] = useState("");
    console.log(image)
    const [preview, setPreview] = useState(false);

    useEffect(() => {
    }, [image])

    const handleImageUpload = (e) => {
        setImage(e.target.files[0]);
        setPreview(true);
    }

    const clearImage = () => {
        setPreview(false);
        setImage("");
    }

    const handleSubmit = () => {
        localStorage.setItem("image", image?.name)
        uploadImage(image);
        setPreview(false);
        setImage("");
        handleNewImage();
    }

    return (
        <div>
            {
                preview ?
                    <div className="cargar-imagen-fondo">

                        <img className="previsualizacion-img" src={URL.createObjectURL(image)} alt="Preview of upload" />
                        <div className="botones-cargar">
                            <button onClick={handleSubmit}>Subir imagen</button>
                            <button onClick={clearImage}>Elegir otra imagen</button>
                        </div>
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