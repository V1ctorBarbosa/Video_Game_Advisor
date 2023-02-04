//React
import React from 'react'

//Components
import { Container } from  './HomeStyles'

//ReactIcons
import {AiOutlinePlus} from "react-icons/ai";

//Router
import { Link } from 'react-router-dom';

//Components
import GameScreen from '../../components/GameScreen/gameScreen';


export default function Home() {
  return (
    <Container>
      <Link to='/create'>
        <AiOutlinePlus/>
      </Link>
      <GameScreen />
    </Container>
  )
}
