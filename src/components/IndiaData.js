import React,{useState,useEffect} from 'react'
import axios from 'axios';
// import { IconContext } from "react-icons";
import 'fontsource-roboto';
// import { Container } from '@material-ui/core';
import {Container,Row,Col} from 'react-bootstrap';

 
function IndiaData() {

    const [activeCases, setactiveCases] = useState()
    const [newCases, setnewCases] = useState()
    const [newDeaths, setnewDeaths] = useState()
    // const [newRecovered, setnewRecovered] = useState()
    const [caseEvery, setcaseEvery] = useState()
    const [totalCases, settotalCases] = useState()
    const [totalDeaths, settotalDeaths] = useState()
    const [totalRecovered, settotalRecovered] = useState()
    const [infectionRisk, setinfectionRisk] = useState()
    const [testPercent, settestPercent] = useState()


    const getIndiaData = () =>{

        var options = {
          method: 'GET',
          url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/country-report-iso-based/India/ind',
          headers: {
            'x-rapidapi-key': '0b84bc8a96msh77982fdcfd85153p1d188cjsn5d52d2fa89e1',
            'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
          }
        };
      
      axios.request(options).then(function (response) {
        //   console.log(response.data);
        setactiveCases(response.data[0].ActiveCases)
        setnewCases(response.data[0].NewCases)
        setnewDeaths(response.data[0].NewDeaths)
        // setnewRecovered(response.data[0].NewRecovered)
        settotalCases(response.data[0].TotalCases)
        settotalDeaths(response.data[0].TotalDeaths)
        settotalRecovered(response.data[0].TotalRecovered)
        setcaseEvery(response.data[0].one_Caseevery_X_ppl)
        setinfectionRisk(response.data[0].Infection_Risk)
        settestPercent(response.data[0].Test_Percentage)


      }).catch(function (error) {
          console.error(error);
      });
    }

    useEffect(()=>{
        getIndiaData()
    },[activeCases])
      
    return (
    // <Container>
    <div>
        <Row>
            <Col sm>
            <div className="world-head">
                     INDIA
               </div>
            </Col>
        </Row>
        <Row className="caseevery-text">
            <Col sm>
                1 case per <span className="caseevery">{caseEvery}</span> people
            </Col>
        </Row >
        <br></br>
        <Row>
            <Col sm>
                <div className="india-text">
                <div className="india-numbers">
                    {newCases}
                </div>
                    <div className="india-dummy">New Cases</div>
                {/* <br></br> */}
                <div className="india-numbers">
                    {activeCases}
                </div>
                    <div className="india-dummy">Active Cases</div>
                </div>
            </Col>
            <Col sm>
                <div className="india-text">
                <div className="india-numbers">
                    {totalCases}
                </div>
                    <div className="india-dummy">Total Cases</div>
                {/* <br></br> */}
                <div className="india-numbers">
                    {infectionRisk}
                </div>
                    <div className="india-dummy">Infection Risk</div>
                </div>
            </Col>
            <Col sm>
                <div className="india-text">
                <div className="india-numbers"> 
                    {testPercent}
                </div>
                    <div className="india-dummy">Test Percentage</div>
                {/* <br></br> */}
                <div className="india-numbers">
                    {totalRecovered}
                </div>
                    <div className="india-dummy">Total Recovered</div>
                </div>
            </Col>
            <Col sm>
                <div className="india-text">
                <div className="india-numbers">
                    {newDeaths}
                </div>
                    <div className="india-dummy">New Deaths</div>
                {/* <br></br> */}
                <div className="india-numbers">
                    {totalDeaths}
                </div>
                    <div className="india-dummy">Total Deaths</div>
                </div>
            </Col>
            </Row>
            </div>
        
    )
}


export default IndiaData