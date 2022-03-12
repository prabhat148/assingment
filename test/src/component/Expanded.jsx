import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Expanded = () => {

  const [expanded, setExpanded] = React.useState(false);
  const [heading, setheading] = React.useState("show");
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    setheading(isExpanded ? "hide" : "show");
  };
  return (
    <div style={{width:'100%',borderRadius:'20px'}}>

    <Accordion onChange={handleChange()} style={{borderRadius:'20px',justifyContent:'center',border:'none',boxShadow:'none'}}>
     <div style={{display:'flex',justifyContent:'center'}}>

    <AccordionSummary style={{}} expandIcon={<ExpandMoreIcon/>}>

       {heading}
    </AccordionSummary>
     </div>
    <AccordionDetails >

     lorem
     lorem
     lorem
     lorem
     lorem
    </AccordionDetails>
        
    </Accordion>
      
    </div>
  )
}

export default Expanded
