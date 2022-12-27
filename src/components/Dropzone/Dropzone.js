//React
import React, {useCallback, useState} from 'react';

//Dropzone
import {useDropzone} from 'react-dropzone';

//Firebase
import firebase from '../../services/firebase';

export default function Dropzone() {

    const [selectedImage, setSelectedImage] = useState([])

    const onDrop = useCallback(acceptedFiles => {
        setSelectedImage(acceptedFiles.map(file =>
            Object.assign(file, {
                preview: URL.createObjectURL(file)
            })
        ))
      }, [])
      const {getRootProps, getInputProps} = useDropzone({onDrop})
      const selected_images = selectedImage?.map(file=>(
        <div>
            <img src={file.preview} style={{width: '200px'}}alt='' />
        </div>
      ))
    
      return (
        <div>
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                    <p>Drop the files here ...</p> :
                    <p>Drag 'n' drop some files here, or click to select files</p>
                <div>{selected_images}</div>
            </div>
        </div>
    )
}
