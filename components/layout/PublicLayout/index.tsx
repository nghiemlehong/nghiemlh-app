import React from 'react'
import AppBar from '../../base/AppBar'
import styled from 'styled-components'


interface Props {

}

const PublicLayout:React.FC<Props> = ({
    children
}) => {
  return (
    <Wrapper>
        <AppBar/>
        {children}
    </Wrapper>
  )
}

export default PublicLayout

const Wrapper = styled.div`
    
`