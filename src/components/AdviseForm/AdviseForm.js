//React
import React, { useState, useEffect, useRef } from 'react';

//Styles
import { 
  Container,
  AdvisePreview,
  Form,
  Input,
  Label,
  //Error,
  Button
} from './AdviseFormStyles'

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
  const hiddenFileInput = useRef(null);


  const { register, handleSubmit, formState: {errors}, reset} = useForm({
      resolver: yupResolver(schema),
    });

  const uploadImage = async (e) => {
    const fileUploaded = e.target.files[0];
    setImage(fileUploaded)
  }

  const handleClick = () => {
    hiddenFileInput.current.click();
  }

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
      } 
      catch(error){
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
    <Container>
        <Form onSubmit={handleSubmit(submitForm)}>
          <Button onClick={handleClick}>
            {image == null ? 'Upload Advise Image' : 'Is This Your Advise?'}
          </Button>
            <Input
                type='file'
                name='image'
                {...register('image')}
                ref={hiddenFileInput}  
                style={{display:'none'}}
                onChange={uploadImage}
              />
          <Label>
              Name:
              <Input 
                  type='text'
                  name='name'  
                  {...register('name')}                
              />
          </Label>

          <Label>
              Year:
              <Input 
                  type='number'
                  name='year'  
                  {...register('year')}                
              />
          </Label>

          <Label>
              Console:
              <Input 
                  type='text'
                  name='console'  
                  {...register('console')}                
              />
          </Label>

          <Label>
              Studio:
              <Input 
                  type='text'
                  name='studio'  
                  {...register('studio')}                
              />
          </Label>

          <Label>
              Genre:
              <Input 
                  type='text'
                  name='genre'  
                  {...register('genre')}                
              />
          </Label>
          <Button type='submit'>Send Advise</Button>
        </Form>
    </Container>
  )
}
