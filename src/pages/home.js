import React from 'react'
import { Flex, Text, Fixed } from '@elementary/components'
import { FadeUp, FadeLeft } from '../components/animations'
import Saber from '../components/saber'
import styled from 'styled-components'
import { useStore } from '../core/renderReact'

const LightDarkButton = styled(Text)`
  cursor: pointer;
  padding-right: 20px;
`

const initState = {
  theme: 'dark'
}

const chooseSide = theme => theme === 'dark' ? 'light' : 'dark'

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'TOGGLE_SIDE': return { theme: chooseSide(state.theme) }
    default: return { ...state }
  }
}

export default props => {
  const [{ theme }, dispatch] = useStore('home')
  return (
    <>
      <Fixed width='100%' backgroundColor={theme === 'light' ? '#fff' : '#000'}>
        <Flex justifyContent='flex-end' >
          <FadeUp delay={500} >
            <LightDarkButton color={theme === 'dark' ? '#fff' : '#000'} fontSize='30px' padding='10px' onClick={_ => dispatch({ type: 'TOGGLE_SIDE' })} >Turn to {chooseSide(theme)} Side !</LightDarkButton>
          </FadeUp>
        </Flex>
      </Fixed>
      <Flex flexDirection='row' backgroundColor={theme === 'light' ? '#fff' : '#000'} height='100%' alignItems='center' style={{ overflow: 'hidden' }} justifyContent='space-between' >
        <Flex flexDirection='column' marginLeft='80px' >
          <FadeUp >
            <Text fontSize='180px' color={theme === 'dark' ? '#fff' : '#000'} >Kanit Sharma</Text>
          </FadeUp>
          <FadeUp delay={300} >
            <Text fontSize='70px' opacity='0' color={theme === 'dark' ? '#fff' : '#000'} >Full Stack JavaScript Developer</Text>
          </FadeUp>
        </Flex>
        <Flex flexDirection='column' alignItems='flex-end' marginLeft='100px' >
          <FadeLeft delay={200} >
            <Saber theme={theme} />
          </FadeLeft>
        </Flex>
      </Flex>
    </>
  )
}