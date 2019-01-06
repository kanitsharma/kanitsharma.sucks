import React from 'react'
import { Flex, Text, Fixed } from '@elementary/components'
import { FadeUp, FadeLeft } from '../components/animations'
import Saber from '../components/saber'
import styled from 'styled-components'
import { useStore } from '../core/renderReact'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

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


const LightDarkButton = styled(Text)`
  cursor: pointer;
  padding-right: 20px;
`

const StyledIcons = styled(Flex)`
  svg:hover {
  fill: ${({ theme }) => theme === 'dark' ? '#e9032c' : '#3232ff'};
    cursor: pointer;
  }
`

const A = styled.a`
  border: none;
  outline: none;
`

const Header = ({ theme, dispatch }) => (
  <Fixed width='100%' backgroundColor='transparent'>
    <Flex justifyContent='flex-end' >
      <FadeUp delay={500} >
        <LightDarkButton color={theme === 'dark' ? '#fff' : '#000'} fontSize='30px' padding='10px' onClick={_ => dispatch({ type: 'TOGGLE_SIDE' })} >Turn to {chooseSide(theme)} Side !</LightDarkButton>
      </FadeUp>
    </Flex>
  </Fixed>
)


const Links = ({ theme }) => (
  <StyledIcons justifyContent='flex-start' mt='25px' theme={theme} >
    <A href='https://github.com/kanitsharma' >
      <FaGithub color={theme === 'dark' ? '#fff' : '#000'} fontSize='50px' style={{ padding: '0px 20px' }} />
    </A>
    <A href='https://www.linkedin.com/in/kanit-sharma/' >
      <FaLinkedin color={theme === 'dark' ? '#fff' : '#000'} fontSize='50px' style={{ padding: '0px 20px' }} />
    </A>
    <A href='https://twitter.com/kanitsharma' >
      <FaTwitter color={theme === 'dark' ? '#fff' : '#000'} fontSize='50px' style={{ padding: '0px 20px' }} />
    </A>
  </StyledIcons>
)

export default props => {
  const [{ theme }, dispatch] = useStore('home')
  return (
    <>
      <Header theme={theme} dispatch={dispatch} />
      <Flex flexDirection='row' backgroundColor={theme === 'light' ? '#fff' : '#000'} height='100%' alignItems='center' style={{ overflow: 'hidden' }} justifyContent='space-between' >
        <Flex flexDirection='column' marginLeft='80px' >
          <FadeUp >
            <Text fontSize='180px' color={theme === 'dark' ? '#fff' : '#000'} >Kanit Sharma</Text>
          </FadeUp>
          <FadeUp delay={300} >
            <Text fontSize='70px' opacity='0' color={theme === 'dark' ? '#fff' : '#000'} >Full Stack JavaScript Developer</Text>
          </FadeUp>
          <Links theme={theme} />
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