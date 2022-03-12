import React from 'react'
import { Fab } from '@mui/material'
const Buttons = (props) => {
  return (
    
       <Fab
          variant="extended"
          size="small"
          color="gray"
          aria-label="add"
          type="radio"
          value={props.timeframe}
          style={{
            borderRadius: "20px",
            marginLeft: "10px",
            width: "70px",
            hight: "8px",
            fontSize: "10px",
            fontWeight:'bold',
            boxShadow: 'none',
            color:'#A2A2A2'
          }}>{props.timeframe}</Fab>
          
           
    
  )
}

export default Buttons
