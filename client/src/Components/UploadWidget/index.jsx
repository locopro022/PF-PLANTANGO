import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux';
import { urlPlantaCreada } from '../../redux/actions';
import './UploadWidget.css';

const UploadWidget = () => {
    const dispatch = useDispatch();
    const cloudinaryRef = useRef();
    const widgetRef = useRef()
    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: "doycjj3gx",
            uploadPreset: "images"
        }, (err, result) => {
            let url = result.info?.secure_url?.length ? result.info.secure_url : null
            /* console.log(url) */
            url?.length && dispatch(urlPlantaCreada(url))
        })
    }, [])
    return (
        <div>
            <button onClick={() => widgetRef.current.open()} className='buttonUp'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Subir imagen
            </button>
        </div>
    )
}

export default UploadWidget;