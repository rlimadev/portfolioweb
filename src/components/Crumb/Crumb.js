import React from 'react'

import { Container } from './styles'

const Crumb = ({page}) => {
  return (
    <Container>
      Home {'>'} {page}
    </Container>
  )
}

export default Crumb

