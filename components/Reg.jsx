import { TextField, Typography } from '@mui/material';
import React from 'react';

const Reg = () => {
  return (
    <div style={{marginLeft:'45%',marginTop:'10%'}}>
       <h1>login page</h1>
      <input type="text" placeholder= 'username'/>
      <br />
      <br />
      <input type="text" placeholder= 'password'/>
      <br />
      <br />
      <button style={{marginLeft:'8%'}}>login</button>
      <br /><br /><br /><br />
     

    </div>
  )
}

export default Reg
