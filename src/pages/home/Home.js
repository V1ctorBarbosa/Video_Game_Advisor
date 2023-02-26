//React
import React from 'react'

//Components
import { Container, Icon, LinkContainer } from  './HomeStyles'

//Components
import GameScreen from '../../components/GameScreen/gameScreen';


export default function Home() {
  return (
    <Container>
      <LinkContainer to='/create'>
        <Icon size={30}/>
      </LinkContainer>
      <GameScreen />
    </Container>
  )
}
