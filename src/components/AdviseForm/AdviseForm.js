//React
import React, {useState} from 'react';

// Schema
import { schema } from './Schema';

//HookForm + Yup
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

//Firebase
import { firestore, storage } from '../../services/firebase';

//uuid
import { v4 } from 'uuid';

export default function AdviseForm() {

    const [ cachorro, setCachorro] = useState(null)

    const { register, handleSubmit, formState: {errors}, reset} = useForm({
        resolver: yupResolver(schema),
      });

    const image = (e) => {
        setCachorro(...e.target.file)
    }

      const submitForm =  async (data) => {
        console.log(cachorro)
        // try{  
        //     let id = 1;

        //     await storage
        //     .ref(`images`)
        //     .child(`logo-${id}`)
        //     .put(data.image)
        //     .then(async () => {
        //     await storage
        //         .ref(`images`)
        //         .child(`logo-${id}`)
        //         .getDownloadURL
        //         .then(async (url) => {
        //         await firestore
        //             .collection("advise")
        //             .doc(`${id}`)
        //             .set({
        //             image: url,
        //             name: data.name,
        //             year: data.year,
        //             console: data.console,
        //             studio: data.studio,
        //             genre: data.genre
        //             });
        //         });
        //     });

        //     setCachorro(data.image)
        // } catch(error){
        //     console.log(error)
        // }

        // reset({
        //     image: '',
        //     name: '',
        //     year: null,
        //     console: '',
        //     studio: '',
        //     genre: ''
        // })
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
                    onChange={image}
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
        <img src={cachorro} alt='cachorro'/>
    </div>
  )
}
