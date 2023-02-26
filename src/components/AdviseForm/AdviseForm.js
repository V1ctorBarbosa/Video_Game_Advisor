//React
import React, { useState, useEffect, useRef } from 'react';

//Styles
import { 
  Container,
  Form,
  PreviewSection,
  AdvisePreview,
  FormSection,
  Input,
  Label,
  //Error,
  Button
} from './AdviseFormStyles'

//HookForm + Yup
import { useForm } from 'react-hook-form';

//Firebase
import { firestore, storage } from '../../services/firebase';
import { uploadBytes , ref, getDownloadURL } from 'firebase/storage';

export default function AdviseForm() {
  
  const [ imageUpload, setImageUpload ] = useState(null)
  const [ gameID, setGameID ] = useState(0)
  const hiddenFileInput = useRef(null);

  const { register, handleSubmit, formState: {errors}, reset} = useForm();

  const uploadImage = async (e) => {
    const fileUploaded = e.target.files[0];
    setImageUpload(fileUploaded)
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
    console.log(data)
    try{  
      if(imageUpload != null){
        const imageRef = ref(storage, `images/${imageUpload.name}`)
        uploadBytes(imageRef, imageUpload).then(() => {
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
              setImageUpload(null)
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
          <PreviewSection>
            <AdvisePreview 
              src={ imageUpload ? URL.createObjectURL(imageUpload) : ''}
              alt='preview'
            />
            <Button onClick={handleClick}>
              {imageUpload == null ? 'Upload Advise Image' : 'Is This Your Advise?'}
            </Button>
              <Input
                type='file'
                name='image'
                {...register('image')}
                ref={hiddenFileInput}  
                style={{display:'none'}}
                onChange={uploadImage}
              />
          </PreviewSection>
          <FormSection>
            <Label>
              Name:
              <Input 
                type='text'
                name='name'  
                {...register('name', {required: 'Name of the game is mandatory'})}                
              />
            </Label>
            <Label>
              Year:
              <Input 
                type='number'
                name='year'  
                {...register('year', {required: 'Year of the game is mandatory'})}                
              />
            </Label>
            <Label>
              Console:
              <Input 
                type='text'
                name='console'  
                {...register('console', {required: 'Console of the game is mandatory'})}                
              />
            </Label>
            <Label>
              Studio:
              <Input 
                type='text'
                name='studio'  
                {...register('studio', {required: 'Studio of the game is mandatory'})}                
              />
            </Label>
            <Label>
              Genre:
              <Input 
                type='text'
                name='genre'  
                {...register('genre', {required: 'Genre of the game is mandatory'})}                
              />
            </Label>
            <Button type='submit'>Send Advise</Button>
          </FormSection>
        </Form>
    </Container>
  )
}
