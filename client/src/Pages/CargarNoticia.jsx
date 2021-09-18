import React, {useState} from "react";
import ImageContainer from "../Components/ImageContainer";
import ImageForm from "../Components/ImageForm";

const CargarNoticia = () => {

    const [newImage, setNewImage] = useState([]);

    const handleNewImage = () => {
        setNewImage([...newImage, "New image"])
    }
    return (
        <div>
            <h2>Cargar noticia</h2>
            <ImageContainer newImage={newImage} />
            <ImageForm handleNewImage={handleNewImage}/>
        </div>
    )
}

export default CargarNoticia;