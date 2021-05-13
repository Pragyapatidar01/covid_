import React, { Component ,useState,useEffect} from 'react'
import {Chart} from "chart.js";
import classes from "./LineGraph.module.css";
import {Line} from 'react-chartjs-2'
import axios from 'axios'

export default class LineGraph extends Component {
    chartRef = React.createRef();
    
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");

        let dailyconfirm = [];
        let date = [];

        axios.get('https://api.covid19india.org/csv/latest/state_wise_daily.csv').then(res =>{
        //    console.log(res.data)

        for(const dataObj of res.data){
            dailyconfirm.push(dataObj.TT)
            date.push((dataObj.Date))
        }
    //    console.log(dailyconfirm,date);
        new Chart(myChartRef, {
            type: "line",
            data: {
            labels:date,
            datasets:[
                {
                    label: "Cases",
                    data: dailyconfirm,
                    backgroundColor:["rgba(230, 0, 0,0.7)"],
                    borderColor:["rgba(230, 0, 0)"],
                    borderWidth:1,
                    fill: true,
                    radius: 0
                }
            ]
            },
            options: {
                legend: {
                    labels: {
                        //  fontColor: "green"
                         color: "green"
                        }
                     },
               scales: {
                   yAxes: [{
                       ticks: {
                           beginAtZero:true,
                           fontColor: 'red'
                       },
                   }],
                 xAxes: [{
                       ticks: {
                        //    fontColor: 'green',
                        // display:false
                        color: "green"
                       },
                   }]
               } ,
            }
        });
    }).catch(err =>{
        console.log(err)
    })
}

    render() {
        return (
            <div className={classes.graphContainer}>
                <canvas
                    // id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}