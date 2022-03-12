
import React from 'react'
import styled from 'styled-components'
import Buttons from './Buttons'
import Data from '../Data'



const Container =styled.section`
 

`
const ButtonContainer=styled.section`

display:flex;




`




const Timeframe = () => {
  return (
    <Container>

    <h4 style={{margin:'10px',marginLeft:'0'}}>The TimeFrame</h4>

    <ButtonContainer>
    {Data.map(item =>
        <Buttons  timeframe={item.timeframe}> </Buttons>
    )}

    </ButtonContainer>
      
    </Container>
  )
}

export default Timeframe
