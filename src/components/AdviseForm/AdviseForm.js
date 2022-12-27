//React
import React from 'react';

//Schema
import { schema } from './Schema';

//HookForm + Yup
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

export default function AdviseForm() {

    const schema = yup.object().shape({
        id: yup.number().positive().integer().required(),
        name: yup.string().required(),
        year: yup.number().positive().integer().required(),
        console: yup.string().required(),
        studio: yup.string().required(),
        genre: yup.string().required()
    })

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema), 
    })

    const submitForm = (data) => {
        console.log(data)
    }
  return (
    <div>
        <form onSubmit={handleSubmit(submitForm)}>
            <input 
                type='text'
                name='name'
                placeholder='Game Name...'
                ref={register} />
            
            <input 
                type='text'
                name='year'
                placeholder='Game Year...'
                ref={register} />

            <input 
                type='text'
                name='console'
                placeholder='Game Console...'
                ref={register} />

            <input 
                type='text'
                name='studio'
                placeholder='Game Studio...'
                ref={register} />

            <input 
                type='text'
                name='genre'
                placeholder='Advise Genre...'
                ref={register} />

            <input type='submit' id='submit' />
        </form>
    </div>
  )
}
