import React from 'react'
import { Flex, Text } from '@elementary/components'

export default props => (
  <Flex style={props.style} backgroundColor='#000' color="#fff" h='100%' alignItems='center' justifyContent='center' >
    <Text fontSize='150px' >About</Text>
  </Flex>
)