//React
import React from 'react';

//ReactIcons
import { AiOutlineLeft } from "react-icons/ai";

//Router
import { Link } from 'react-router-dom';

//Components
import AdviseForm from '../../components/AdviseForm/AdviseForm';

export default function Create() {
  return (
    <div>
      <h1>Página de criação</h1>
      <Link to='/'>
        <AiOutlineLeft/>
      </Link>
      <AdviseForm />
    </div>
  )
}
