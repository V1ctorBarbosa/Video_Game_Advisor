//React
import React, {useCallback, useState} from 'react';

// Schema
import { schema } from './Schema';

//Dropzone
import {useDropzone} from 'react-dropzone';

//HookForm + Yup
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

//Firebase
import firebase from '../../services/firebase';

export default function AdviseForm() {

    const [selectedImage, setSelectedImage] = useState([])

    const { register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
      });

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

      const submitForm =  async (data) => {
        let id = 1;
        await firebase.firestore().collection('advise').doc(`${id}`).set({
            name: data.name,
            year: data.year,
            console: data.console,
            studio: data.studio,
            genre: data.genre
        })
      };


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
                    {...register('name')}                
                />
                <p>{errors.name?.message}</p>
            </label>

            <label>
                Year
                <input 
                    type='number'
                    name='year'  
                    {...register('year')}                
                />
                <p>{errors.year?.message}</p>
            </label>

            <label>
                Console:
                <input 
                    type='text'
                    name='console'  
                    {...register('console')}                
                />
                <p>{errors.console?.message}</p>
            </label>

            <label>
                Studio:
                <input 
                    type='text'
                    name='studio'  
                    {...register('studio')}                
                />
                <p>{errors.studio?.message}</p>
            </label>

            <label>
                Genre:
                <input 
                    type='text'
                    name='genre'  
                    {...register('genre')}                
                />
                <p>{errors.genre?.message}</p>
            </label>

            <button type='submit'>Enviar</button>
        </form>
    </div>
  )
}
