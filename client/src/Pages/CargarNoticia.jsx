import React, {useEffect, useState} from "react";
import ImageContainer from "../Components/ImageContainer";
import ImageForm from "../Components/ImageForm";
import axios from "axios";
import swal from "sweetalert";
import "./CargarNoticia.css";
const{ REACT_APP_BACK_BASE_URL} = process.env


export function validate(input) {
    let errors = {};
    if (!input.title) {
        errors.title = "Se requiere un título"
    }
    if (!input.content) {
        errors.content = "Se requiere un contenido"
    }
    return errors;
}

const CargarNoticia = () => {
   
    const [newImage, setNewImage] = useState([]);
    const [input, setInput] = useState({
        title: "",
        content: "",
    })

    useEffect(() => {
    }, [input])
    // eslint-disable-next-line
    const [errors, setErrors] = useState({})

    
    const handleInputChange = (e) => {
        setInput({
            ...input, 
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }));
    };

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        let image2 = localStorage.getItem("image")
        let id = localStorage.getItem("userId")
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }));
        
        if (!errors.title && !errors.content && image2) {
                await axios.post(`${REACT_APP_BACK_BASE_URL}/newNotice`, {input, image2, id});
                swal("La noticia se creó correctamente", "Gracias", "success");    
                setInput({
                    title: "",
                    content: "",
                })
        } else {
            swal("Oh oh, algo salió mal", "Inténtelo nuevamente", "warning")
        }
    }

    const handleNewImage = () => {
        setNewImage([...newImage, "New image"])
    }
    return (
        <div>
            <h1>Cargar noticia</h1>
            <form className="back">
                <input name="title" value={input.title} onChange={handleInputChange} placeholder="Título"></input>
                { errors.title && <p>{errors.title}</p>}
                <textarea name="content" value={input.content} onChange={handleInputChange} placeholder="Contenido"></textarea>
                { errors.content && <p>{errors.content}</p>}
            </form>
            <ImageContainer newImage={newImage} />
            <ImageForm handleNewImage={handleNewImage}/>
            <button type="submit" onClick={handleSubmit}>Crear</button>
        </div>
    )
}

export default CargarNoticia;