//React
import React from 'react';

//Styles
import { Container } from './CreateStyles'

//ReactIcons
import { AiOutlineLeft } from "react-icons/ai";

//Router
import { Link } from 'react-router-dom';

//Components
import AdviseForm from '../../components/AdviseForm/AdviseForm';

export default function Create() {
  return (
    <Container>
      <Link to='/'>
        <AiOutlineLeft/>
      </Link>
      <AdviseForm />
    </Container>
  )
}
