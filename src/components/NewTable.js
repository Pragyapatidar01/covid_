import React, { useState, useEffect } from 'react';
// import './App.css';
import MaterialTable from 'material-table'
import axios from 'axios'
import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
 
const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };


function NewTable() {

  const [data, setData] = useState([])
  const columns = [
    { title: "State", field: "state" },
    { title: "Active", field: "active" },
    { title: "Confirmed", field: "confirmed" },
    { title: "Deaths", field: "deaths" },
    { title: "Recovered", field: "recovered" },
  ]
  useEffect(() => {
    axios.get('https://api.covid19india.org/data.json').then(res =>{
        // console.log(res.data.statewise)
        setData(res.data.statewise)
      }).catch(err => {
        console.log(err)
    })
  }, [])

console.log(data)

  return (
    <div>
      <MaterialTable
      icons={tableIcons}
      options={{
        // search: false,
        rowStyle: {
            backgroundColor: '#181818',
            color:'#cccccc'
          },
          headerStyle: {
            backgroundColor: '#333333',
            color: '#cccccc'
          },
          
      }}
      localization={{
        pagination:{

        },
        body: {
            emptyDataSourceMessage: 'No records to display'
        }
    }}
        title="Indian States"
        data={data}
        columns={columns}
      />
    </div>
  );
}

export default NewTable;