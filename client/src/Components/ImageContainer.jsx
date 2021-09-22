import React, { useState, useEffect } from 'react';
import axios from 'axios'
const{ REACT_APP_BACK_BASE_URL} = process.env


const ImageContainer = ({ newImage }) => {
    // eslint-disable-next-line
    const [images, setImages] = useState([]);
    const [fallback, setFallback] = useState("");
    
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
  
    return (
        <div>

                <div>
                    <h1>{fallback}</h1>
                    <hr/>
                    <h3>Upload images in the form bellow</h3>
                </div>
        </div>
    )
}

export default ImageContainer;