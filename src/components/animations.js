import React from 'react'
import posed from 'react-pose'

const Animated = posed.div({
  down: {
    opacity: 0,
    y: 50,
    delay: props => props.delay
  },
  up: {
    opacity: 1,
    y: 0,
    delay: props => props.delay
  },
  left: {
    opacity: 1,
    x: 0,
    delay: props => props.delay
  },
  right: {
    opacity: 0,
    x: 200,
    delay: props => props.delay
  },
  transition: {
    opacity: { type: 'spring' }
  }
});

export const FadeUp = props => (
  <Animated initialPose='down' pose='up' {...props}>
    {props.children}
  </Animated>
)

export const FadeLeft = props => (
  <Animated initialPose='right' pose='left' {...props}>
    {props.children}
  </Animated>
)