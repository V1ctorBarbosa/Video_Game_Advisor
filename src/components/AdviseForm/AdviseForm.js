//React
import React, {useState} from 'react';

// Schema
import { schema } from './Schema';

//HookForm + Yup
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

//Firebase
import firebase from '../../services/firebase';
import { ref, uploadBytes } from 'firebase/storage';

//uuid
import { v4 } from 'uuid';

export default function AdviseForm() {

    const [imageUpload, setImageupload] = useState(null)

    const { register, handleSubmit, formState: {errors}, reset} = useForm({
        resolver: yupResolver(schema),
      });

      const submitForm =  async (data) => {
        if(imageUpload == null) return
        const imageRef = ref(firebase.storage(), `images/${imageUpload.name + v4()}`)
        uploadBytes(imageRef, imageUpload).then(() => {
            alert('foi, porra')
        })
        
        let id = 1;
        await firebase.firestore().collection('advise').doc(`${id}`).set({
            image: '',
            name: data.name,
            year: data.year,
            console: data.console,
            studio: data.studio,
            genre: data.genre
        })

        reset({
            image: null,
            name: '',
            year: 0,
            console: '',
            studio: '',
            genre: ''
        })
      };
      console.log(imageUpload)


  return (
    <div>
        <form onSubmit={handleSubmit(submitForm)}>

            <label>
                Image:
                <input
                    type='file'
                    name='image'
                    onChange={(e) => {
                        setImageupload(e.target.files[0])
                    }}
                    {...register('image')}
                />
            </label>
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
