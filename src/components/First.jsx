import { TextField, Typography } from '@mui/material'
import React from 'react'

const First = () => {
  return (
    <div>
      <h1>login page</h1>
      <Typography variant='h3'>login page </Typography>
      <br />
      <TextField variant="outlined" label='name'/>
      <br />
      <TextField id="filled" label='age' />
      <br />
      <TextField id="filled" label='E-mail' />
      <br />
      <TextField id='standard' label="Fathers name" />
      <br />
      <TextField id='standard' label="Mothers name" />
      <br />
      <TextField id='standard' label="Password" />
      <br />
      <TextField id='standard' label="Confirm password" />
    </div>
  )
}

export default First
