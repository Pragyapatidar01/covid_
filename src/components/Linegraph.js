import React,{useState,useEffect} from 'react'
import classes from "./LineGraph.module.css";
import {Line} from 'react-chartjs-2'
import axios from 'axios'

function Linegraph() {
   
   const [chartData , setChartData] = useState({})

   const chart = () =>{
    let dailyconfirm = [];
    let date = [];

       axios.get('https://api.covid19india.org/data.json').then(res =>{
        //    console.log(res.data.cases_time_series)

        for(const dataObj of res.data.cases_time_series){
            dailyconfirm.push(dataObj.dailyconfirmed)
            date.push((dataObj.dateymd))
        }
        setChartData({
            labels:date,
            datasets:[
                {
                    label: "Cases",
                    data: dailyconfirm,
                    backgroundColor:["rgba(46, 196, 182,0.8)"],
                    borderColor:["rgba(46, 196, 182)"],
                    borderWidth:0.5,
                    fill: true,
                    radius: 0
                }
            ],
        })

       }).catch(err =>{
           console.log(err)
       })
       console.log(dailyconfirm,date)

   }
   useEffect(() =>{
    chart();
   }, []);
   
    return (
        <div className={classes.graphContainer}>
          <Line data={chartData} />  
          
        </div>
    )
}



export default Linegraph
