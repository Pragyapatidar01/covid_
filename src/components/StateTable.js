import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });


const StateTable = () => {
let rows = [];

  const classes = useStyles();

    const getData = () =>{

        function createData(statecode, state, active, confirmed, deaths, recovered) {
            return {statecode, state, active, confirmed, deaths, recovered}
          }

        axios.get('https://api.covid19india.org/data.json').then(res =>{
            // console.log(res.data.statewise)

            for(const dataObj of res.data.statewise){
                rows.push(createData(dataObj.statecode, dataObj.state, dataObj.active, dataObj.confirmed, dataObj.deaths, dataObj.recovered) )
            }
               

        }).catch(err => {
            console.log(err)
        })

        console.log(rows)
        // rows.map((row) => (
          
        // ))
        const listItems = rows.map((numbers) =>
          <li>{numbers.state}</li>
        );
    }


    useEffect(()=>{
        getData()
    },[])

    return (
        <div>
            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>State </StyledTableCell>
            <StyledTableCell align="right">Active</StyledTableCell>
            <StyledTableCell align="right">Confirmed</StyledTableCell>
            <StyledTableCell align="right">Deaths</StyledTableCell>
            <StyledTableCell align="right">Recovered</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {/* {rows.map((row) => (
            <StyledTableRow key={row.statecode}>
              <StyledTableCell key={row.state} component="th" scope="row">{row.state}</StyledTableCell>
              <StyledTableCell key={row.active} align="right">{row.active}</StyledTableCell>
              <StyledTableCell key={row.confirmed} align="right">{row.confirmed}</StyledTableCell>
              <StyledTableCell key={row.deaths} align="right">{row.deaths}</StyledTableCell>
              <StyledTableCell key={row.recovered} align="right">{row.recovered}</StyledTableCell>
            </StyledTableRow>
          ))} */}
          <StyledTableRow>
              {/* <StyledTableCell component="th" scope="row">{rows[0].state}</StyledTableCell>
              <StyledTableCell align="right">{rows[0].active}</StyledTableCell>
              <StyledTableCell align="right">{rows[0].confirmed}</StyledTableCell>
              <StyledTableCell align="right">{rows[0].deaths}</StyledTableCell>
              <StyledTableCell align="right">{rows[0].recovered}</StyledTableCell> */}
              {/* <StyledTableCell align="right">{listItems}</StyledTableCell> */}
            </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    )
}

export default StateTable
