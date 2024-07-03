import { Grid } from '@mui/material'
import React from 'react'

const Grid = () => {
  
    <div  style={{marginLeft:'4%',}}>
     <Grid container spacing ={2}>

      {pro.map(val,i) => {
        return(
          <Grid item xs={12} md={4}></Grid>
            <Card sx={{maxWidth:345}}></Card>
            <CaedMedia 
            sx={{height: 140}}
            image={val.image}
            title="green iguana"
            />
              )
      
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {val.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {val.price}
          </Typography>
        </CardContent>
      

  
}
        
        
      
     </Grid>
    </div>
  
}

export default GriD
