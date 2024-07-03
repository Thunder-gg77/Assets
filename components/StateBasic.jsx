import { Typography } from '@mui/material'
import React from 'react'

const StateBasic = () => {
var[name,setName]= useState("Tiya");
var[data,setData]= useState();
const inputHandler=(e) =>{
    console.log(e.target.value)
    setName(e.target.value)
};
const changeName=() =>{
  console.log("btn clicked")
  setName(name)
};

  return (
    <div style={{marginLeft:'45%',marginTop:'10%'}}>
    <Typography variant='h3'>Hello</Typography>
    <br />
    <TextField variant='outlined'onChange={inputHandler}/>
    <br /><br />
    <Button variant='outlined'onChange={inputHandler}/>

    </div>
  )
}

export default StateBasic

