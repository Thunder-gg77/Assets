import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const New = () => {
    var[data,setData]= useState("Click the Button");
    const home= () =>{
        console.log("home");
        setData("Home")
    
    };
    const Gallary= () =>{
        console.log("Gallary");
        setData("Gallary")
    
    };
    const Contact =() =>{
        console.log("Contact");
        setData("Contact")
    
    };
   
  return (
    <div
      style={{marginLeft:'5%',marginTop:'10%',textAlign: "center"}}>
      <Typography variant="h4">Welcome to {data}</Typography>
      <br /><br />
      <Button variant="contained"onClick={home}>
        Home
        </Button>&nbsp;&nbsp;

        <Button variant="contained"onClick={Gallary}>
        Gallary
        </Button>&nbsp;&nbsp;

        <Button variant="contained"onClick={Contact}>
        Contact
        </Button>&nbsp;&nbsp;

    </div>
  )
}

export default New
