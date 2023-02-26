//React
import React from 'react';

//Styles
import { Container, Icon, LinkContainer } from './CreateStyles'

//Components
import AdviseForm from '../../components/AdviseForm/AdviseForm';

export default function Create() {
  return (
    <Container>
      <LinkContainer to='/'>
        <Icon size={30}/>
      </LinkContainer>
      <AdviseForm />
    </Container>
  )
}
