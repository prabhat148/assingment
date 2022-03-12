import React from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import { Button,Fab } from "@mui/material";
import Timeframe from "./Timeframe";
import Day from "../component/Day";
 import SmallSwitch from "./SmallSwitch";
import Switch from "./Switch";
import Expanded from "./Expanded";

const Wrapper = styled.section`
  padding: 4em;
  background: #505254;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  display:flex;
  
`;
const Acc =styled.section`
 width: 450px;
  height: 650px;
  background: #ffffff;
  border-radius: 20px;


`

const CardContainer = styled.section`
  width: 400px;
  height: 550px;
  background: #ffffff;
  border-radius: 20px;
  padding: 15px 24px 30px 24px;
  
`;

const Top = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
`;
const Heading = styled.h1`
  font-weight: 700;
  font-size: 23px;
  margin: 0;
  color: #070602;
`;
const Icons = styled.div`
  display: flex;
  justify-content: end;
  alignItems:center;
`;

const Balence = styled.div`
  display: flex;
  justify-content: start;
  padding-top: 0.5rem;
  marginleft: 0px;
  fontweight: 700;
`;

const Dayframe = styled.div``;

const Card = () => {
  return (
    <Wrapper>
    <Acc>

      <CardContainer>
        <Top>
          <Heading>Calculator</Heading>
          <CloseIcon
            style={{
              width: " 18px",
              height: " 18px",
              right: " 25px",
              top: " 25px",
            }}
          ></CloseIcon>
        </Top>

        <Icons>
          <span style={{ margin: "0 10px" }}>icon</span>
          <div style={{ margin: "0 10px", }}> 
              <Switch/>
          </div>
        </Icons>
        <TextField
          id="outlined-basic"
          variant="outlined"
          value="enter the name"
          fullWidth
          style={{ border: "gray", textAlign: "end", fontWeight: "bold" }}
        />
        <Balence>
          <Fab
            variant="extended"
            size="small"
            aria-label="add"
            type="radio"
            style={{
              borderRadius: "10px",
              marginLeft: "10px",
              width: "90px",
              hight: "8px",
              fontSize: "10px",
              boxShadow: "none",
              backgroundColor: "#FFF9AA",
            }}
          >
            use Balance
          </Fab>
          <Fab
            variant="extended"
            size="small"
            color="gray"
            aria-label="add"
            type="radio"
            style={{
              borderRadius: "10px",
              marginLeft: "10px",
              width: "60px",
              hight: "8px",
              fontSize: "10px",
              boxShadow: "none",
            }}
          >
            $1000
          </Fab>
          <Fab
            variant="extended"
            size="small"
            color="gray"
            aria-label="add"
            type="radio"
            style={{
              borderRadius: "10px",
              marginLeft: "10px",
              width: "62px",
              hight: "8px",
              fontSize: "10px",
              boxShadow: "none",
            }}
          >
            $100
          </Fab>
        </Balence>
        <Timeframe />
        <Dayframe>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{ fontWeight: "bold" }}>Enable Accelerated APY</p>
            <switch style={{ padding: "13px" }}><SmallSwitch/></switch>
          </div>

          <p style={{ color:'#A2A2A2', fontSize: "13px", marginTop: "0",fontWeight:'bold' }}>
            Select Teir
          </p>
          <Day />

          <div style={{paddingTop:'20px'}}>

          <TextField
            // id="outlined-basic"
            variant="outlined"
            value="enter the name"
            fullWidth
            style={{ border:"gray", textAlign:"right", fontWeight:"bold" }}
          />
        
          </div>

        </Dayframe>
            <section style={{display:'flex',justifyContent:'space-around',paddingTop:'25px '}}>

            <Button variant="contined" color='#857c7b' style={{backgroundColor:'#403d3d',width:"150px"}}>Primary</Button>
            <Button variant="outlined" style={{width:"150px"}}>Primary</Button>
      
            </section>

      </CardContainer>
            <Expanded/>
    </Acc>
    </Wrapper>
  );
};

export default Card;
