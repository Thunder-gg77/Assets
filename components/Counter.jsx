import { Button, Typography } from '@mui/material';
import React, { useState } from 'react'

const Counter = () => {
    var[Count,setCount]=useState(0);
    
        
        const inc =() =>{
            console.log("inc clicked");
            setCount(++Count)
        };
        const dec =() =>{
            console.log("dec clicked");
            setCount(--Count)

        };
    

  return (
    <div style={{marginLeft:'45%',marginTop:'10%'}}>
      <Typography variant="h1"style={{marginLeft:'5%'}}>
      {Count}</Typography>
      <br />
      <br />
      <Button variant="contained" colour="success" onClick={inc}>
        +
        </Button>
      <Button variant="contained" colour="error" onClick={dec}>
        -
        </Button>
    </div>
  )
}

export default Counter
