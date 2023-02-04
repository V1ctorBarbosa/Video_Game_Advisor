//React
import React, { 
  useState,
  useEffect
} from 'react'

//Styles
import {
  Container,
  Top,
  AdviseImage,
  NullImage,
  Bottom,
  Button
} from './gameScreenStyles'

//Firestore
import { doc, onSnapshot } from "firebase/firestore";
import { db, firestore } from '../../services/firebase'

function GameScreen() {

  const [ advise, setAdvise ] = useState(null)
  const [ advisesQuantity, setAdvisesQuantity ] = useState(0)

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
            setAdvisesQuantity(list.length)
          });
        }
      loadID();
    }, []);
  
  const LoadData = async () => {
    let id = Math.floor(Math.random() * advisesQuantity) + 1
    console.log(id)
    const docRef = doc(db, "advise", id.toString());
    onSnapshot(docRef, (doc) => {
        setAdvise(doc.data())
        console.log(advise)
    })
  }

  return (
    <Container>
      {
        advise == null ? 
        <Top>
          <NullImage onClick={LoadData}>Click for advise</NullImage>
        </Top>
       :
       <Top>
          <AdviseImage src={advise.image} alt='advise'/>
       </Top>
       }
       <Bottom>
          <Button onClick={LoadData}>New Advise</Button>
       </Bottom>
    </Container>
  )
}

export default GameScreen