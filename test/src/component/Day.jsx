import React from 'react'
import styled from 'styled-components';
import Data from '../Data';
import Buttons from './Buttons'

   
const ButtonContainer=styled.section`

display:'flex'
`

const Day = () => {
  return (
    

    <ButtonContainer>
    {Data.map(item =>
        <Buttons  timeframe={item.tier}>1 day </Buttons>
    )}

    </ButtonContainer>
      

  )
}

export default Day
