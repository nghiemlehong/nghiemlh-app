import { AppBar, Avatar } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import MusicPlayerSlider from '../MusicPlayer'

interface Props {

}

const AppMenu:React.FC<Props> = ({
    
}) => {
  return (
    <Wrapper>
      <WrapperProfile>
      le hong ngheim
      </WrapperProfile>
      <MusicPlayerSlider/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  font-family: Roboto;
  background-color: rgba(0,0,0,0.5);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const WrapperProfile = styled.div`

`

export default AppMenu