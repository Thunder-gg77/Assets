import { TableCell, Table, TableContainer, TableHead, TableRow ,TableBody} from '@mui/material'
import React from 'react'

const Tab = () => {
  return (
    <div style={{marginLeft:'45%',marginTop:'10%'}}>
     
      <TableContainer/>
      <Table>
        <TableHead>
            <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Place</TableCell>
            </TableRow>
        </TableHead>

        
        <TableBody>
            <TableRow>
                <TableCell>Tiya</TableCell>
                <TableCell>12</TableCell>
                <TableCell>ERK</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

export default Tab
