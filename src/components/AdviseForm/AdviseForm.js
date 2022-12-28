//React
import React, {useCallback, useState} from 'react';

//Schema
import { schema } from './Schema';

//Dropzone
import {useDropzone} from 'react-dropzone';

//HookForm + Yup
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

export default function AdviseForm() {

    const [selectedImage, setSelectedImage] = useState([])
    const [inputContent, setInputContent] = useState({
        name: "",
        year: 0,
        console: "",
        studio: "",
        genre: "",
    })

    const { handleSubmit, errors } = useForm({
        resolver: yupResolver(schema), 
    })

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
            <img src={file.preview} style={{width: '200px'}} alt='' />
        </div>
      ))

    const submitForm = (data) => {
        console.log(inputContent)
    }

  return (
    <div>
        <div>
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                    <p>Drop the files here ...</p> :
                    <p>Drag 'n' drop some files here, or click to select files</p>
                <div>{selected_images}</div>
            </div>
        </div>

        <form onSubmit={handleSubmit(submitForm)}>
            <label>
                Name:
                <input 
                    type='text'
                    name='name'
                    placeholder='Game Name...'
                    />
            </label>
            
            <label>
                Year:
                <input 
                    type='text'
                    name='year'
                    placeholder='Game Year...'
                    />
            </label>

            <label>
                Console: 
                <input 
                    type='text'
                    name='console'
                    placeholder='Game Console...'
                    value={inputContent.console}
                    />
            </label>

            <label>
                Studio:
                <input 
                    type='text'
                    name='studio'
                    placeholder='Game Studio...'
                    value={inputContent.studio}
                    />
            </label>

            <label>
                Genre:
                <input 
                    type='text'
                    name='genre'
                    placeholder='Advise Genre...'
                    value={inputContent.genre}
                    />
            </label>

            <input type='submit' id='submit' />
        </form>
    </div>
  )
}
