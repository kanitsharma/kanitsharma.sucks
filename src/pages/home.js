import React from 'react'
import { Flex, Text, Fixed } from '@elementary/components'
import Saber from '../components/saber'
import styled from 'styled-components'
import { useStore } from '../core'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from '@reach/router'
import { Spring } from 'react-spring'

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
  p: hover {
    cursor: pointer;
    color: ${({ theme }) => theme === 'dark' ? '#e9032c' : '#3232ff'};
  }
`

const A = styled.a`
  border: none;
  outline: none;
`

const Header = ({ theme, dispatch }) => (
  <Fixed width='100%' backgroundColor='transparent'>
    <Flex justifyContent='flex-end' >
      <Spring delay={600} from={{ opacity: 0, transform: 'translateY(-50px)' }} to={{ opacity: 1, transform: 'translateX(0px)' }} >
        {
          props => <LightDarkButton style={props} color={theme === 'dark' ? '#fff' : '#000'} fontSize='30px' padding='10px' onClick={_ => dispatch({ type: 'TOGGLE_SIDE' })} >Turn to {chooseSide(theme)} Side !</LightDarkButton>
        }
      </Spring>
    </Flex>
  </Fixed>
)

const Footer = ({ theme, style }) => (
  <Fixed b='10px' width='100%' backgroundColor='transparent' style={style} >
    <StyledIcons justifyContent='center' theme={theme} >
      <Link to='/about' >
        <Text color={theme === 'dark' ? '#fff' : '#000'} fontSize='30px' style={{ padding: '0px 20px' }}>About</Text>
      </Link>
      <Text color={theme === 'dark' ? '#fff' : '#000'} fontSize='30px' style={{ padding: '0px 20px' }}>Project</Text>
      <Text color={theme === 'dark' ? '#fff' : '#000'} fontSize='30px' style={{ padding: '0px 20px' }}>Contact</Text>
    </StyledIcons>
  </Fixed>
)


const Links = ({ theme, style }) => (
  <StyledIcons justifyContent='flex-start' mt='25px' theme={theme} style={style} >
    <A href='https://github.com/kanitsharma' target='_blank' >
      <FaGithub color={theme === 'dark' ? '#fff' : '#000'} fontSize='45px' style={{ padding: '0px 20px' }} />
    </A>
    <A href='https://www.linkedin.com/in/kanit-sharma/' target='_blank' >
      <FaLinkedin color={theme === 'dark' ? '#fff' : '#000'} fontSize='45px' style={{ padding: '0px 20px' }} />
    </A>
    <A href='https://twitter.com/kanitsharma' target='_blank' >
      <FaTwitter color={theme === 'dark' ? '#fff' : '#000'} fontSize='45px' style={{ padding: '0px 20px' }} />
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
          <Spring delay={300} from={{ opacity: 0, transform: 'translateY(50px)' }} to={{ opacity: 1, transform: 'translateX(0px)' }} >
            {
              props => <Text style={props} fontSize='150px' color={theme === 'dark' ? '#fff' : '#000'} >Kanit Sharma</Text>
            }
          </Spring>
          <Spring delay={400} from={{ opacity: 0, transform: 'translateY(50px)' }} to={{ opacity: 1, transform: 'translateX(0px)' }} >
            {
              props => <Text style={props} fontSize='60px' opacity='0' color={theme === 'dark' ? '#fff' : '#000'} >Full Stack JavaScript Developer</Text>
            }
          </Spring>
          <Spring delay={500} from={{ opacity: 0 }} to={{ opacity: 1 }} >
            {
              props => <Links theme={theme} style={props} />
            }
          </Spring>
        </Flex>
        <Flex flexDirection='column' alignItems='flex-end' marginLeft='100px' >
          <Spring delay={500} from={{ opacity: 0, transform: 'translateX(300px)' }} to={{ opacity: 1, transform: 'translateX(0px)' }} >
            {
              props => <Saber style={props} theme={theme} />
            }
          </Spring>
        </Flex>
      </Flex>
      {/* <Spring delay={1000} from={{ opacity: 0, transform: 'translateY(50px)' }} to={{ opacity: 1, transform: 'translateX(0px)' }} >
        {
          props => <Footer style={props} theme={theme} />
        }
      </Spring> */}
    </>
  )
}