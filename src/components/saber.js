import React from 'react'
import styled from 'styled-components'

const SaberContainer = styled.div`
  position: relative;
  width: 200px;
  height: 500px;
`

const Saber1 = styled.div`
  position: absolute;
  right: 0px;
  transform: rotate(60deg);
  top: 40%;
  height: 20px;
  width: 700px;
  border-radius: 1200px;
  background-color: #ffe6e5;
  box-shadow: inset 0 0 5px #ffe6e5, 0 0 20px ${props => props.color}, 0 0 30px ${props => props.color}, 0 0 20px ${props => props.color}, 0 0 50px ${props => props.color};
  z-index: 1;
`

const Saber2 = styled.div`
  position: absolute;
  right: 250px;
  transform: rotate(130deg);
  top: 285px;
  height: 20px;
  width: 510px;
  border-radius: 1200px;
  background-color: #ffe6e5;
  box-shadow: inset 0 0 5px #ffe6e5, 0 0 20px ${props => props.color}, 0 0 30px ${props => props.color}, 0 0 20px ${props => props.color}, 0 0 50px ${props => props.color};
`

export default ({ theme }) => <SaberContainer>
  <Saber1 color={theme === 'light' ? '#00be00' : '#e5020b'} />
  <Saber2 color={theme === 'light' ? '#00be00' : '#e5020b'} />
</SaberContainer>