//Yup
import * as yup from 'yup';

export const schema = yup.object().shape({
    name: yup.string().required('name of the game is required'),
    year: yup.number().positive().integer().required('name of the game is required and has to be a number'),
    console: yup.string().required('console of the game is required'),
    studio: yup.string().required('studio of the game is required'),
    genre: yup.string().required('genre of the advise is required')
})
