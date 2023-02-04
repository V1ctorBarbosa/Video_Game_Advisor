//React
import React, { useState, useEffect } from 'react';

// Schema
import { schema } from './Schema';

//HookForm + Yup
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

//Firebase
import { firestore, storage } from '../../services/firebase';
import { uploadBytes , ref, getDownloadURL } from 'firebase/storage';


export default function AdviseForm() {

  const [ image, setImage ] = useState(null)
  const [ gameID, setGameID ] = useState(0)

  const { register, handleSubmit, formState: {errors}, reset} = useForm({
      resolver: yupResolver(schema),
    });

    useEffect(() => {
        async function loadID() {
          await firestore.collection("advise")
            .onSnapshot((snapshot) => {
              const list = [];
    
              snapshot.forEach((doc) => {
                list.push({
                  id: doc.id,
                  ...doc.data(),
                });
            });
            setGameID(list.length + 1)
          });
        }
      loadID();
    }, []);

  const submitForm =  async (data) => {
    try{  
    if(image != null){
        const imageRef = ref(storage, `images/${image.name}`)
        uploadBytes(imageRef, image).then(() => {
            getDownloadURL(imageRef)
            .then(async (url) => {
                await firestore
                .collection("advise")
                .doc(`${gameID}`)
                .set({
                    image: url,
                    name: data.name,
                    year: data.year,
                    console: data.console,
                    studio: data.studio,
                    genre: data.genre
                });
              })
            })
        }

    } catch(error){
        console.log(error)
    }
    reset({
        image: '',
        name: '',
        year: null,
        console: '',
        studio: '',
        genre: ''
    })
};

  return (
    <div>
        <form onSubmit={handleSubmit(submitForm)}>
            <label>
                Image:
                <input
                    type='file'
                    name='image'
                    {...register('image')}  
                    onChange={e => setImage(e.target.files[0])}
                />
                <p>{errors.image?.message}</p>
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
