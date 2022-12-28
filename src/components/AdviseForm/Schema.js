//Yup
import * as yup from 'yup';

export const schema = yup.object().shape({
    id: yup.number().positive().integer().required(),
    name: yup.string().required(),
    year: yup.number().positive().integer().required(),
    console: yup.string().required(),
    studio: yup.string().required(),
    genre: yup.string().required()
})
