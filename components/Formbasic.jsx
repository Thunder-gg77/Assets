import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Formbasic = () => {
    var[inputs,setInputs] = useState({username:'',email:'',place:''});

        const inputHandler=(e) =>{
        console.log(e.target.value);
        setInputs({...inputs, [e.target.name]: e.target.value});
        };
  return (
    <div  style={{marginTop:'10%',marginLeft:'45%'}} >
        <TextField
        variant="outlined"
        label="username"
        onChange={inputHandler}
        name="usename"
        value={inputs.username}
        />
        <br /><br />

         <TextField variant='outlined'
         label='Email'
         onChange={inputHandler}
         name="Email"
         value={inputs.email}/>
         <br /><br />

         <TextField
         variant='outlined' label='Place'
         onChange={inputHandler}
         name="Place"
         value={inputs.place}/>
         <br /><br />

         <Button color="inherit">Login</Button>
    </div>
  )
}

export default Formbasic
