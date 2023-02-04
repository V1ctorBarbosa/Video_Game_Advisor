//React
import React from 'react'

//ReactIcons
import {AiOutlinePlus} from "react-icons/ai";

//Router
import { Link } from 'react-router-dom';

//Components
import GameScreen from '../../components/GameScreen/gameScreen';


export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to='/create'>
        <AiOutlinePlus/>
      </Link>
      <GameScreen />
    </div>
  )
}
