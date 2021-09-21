import React, { useState, useEffect } from 'react';
import axios from 'axios'
const{ REACT_APP_BACK_BASE_URL} = process.env


const ImageContainer = ({ newImage }) => {
    // eslint-disable-next-line
    const [images, setImages] = useState([]);
    const [fallback, setFallback] = useState("");
    console.log(fallback)
    const getImages = async () => {
        try {
            const res = await axios.get(`${REACT_APP_BACK_BASE_URL}/images`);
            if (!res.data.files) {
                setFallback(res.data.msg)
            } else {
                setImages(res.data.files);
            }
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getImages()
    }, [newImage])
    // eslint-disable-next-line
    // const configureImage = (image) => {
    //     return `${REACT_APP_BACK_BASE_URL}` + image
    // }

    return (
        <div>
{/* 
                // images.length > 0 ? 
                // (
                //     images.map(image => (
                //         <img src={configureImage(image)} key={image} alt={image} width="100" height="100"/>
                //     ))
                // ) : */}
                <div>
                    <h1>{fallback}</h1>
                    <hr/>
                    <h3>Upload images in the form bellow</h3>
                </div>
        </div>
    )
}

export default ImageContainer;