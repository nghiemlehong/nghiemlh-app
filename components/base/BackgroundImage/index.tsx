import React from 'react'
import styled from 'styled-components'
import useController from './useController'

const BackgroundImage:React.FC = () => {

  const controller = useController()

  return (
    <Wrapper>
      <BgImage src={controller.images[0]} />
    </Wrapper>
    )
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: -1;
  position: fixed;
`

const BgImage = styled.img`
  width: 100%;
  height: 100%;
`

export default BackgroundImage