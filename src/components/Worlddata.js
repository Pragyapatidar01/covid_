import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { IconContext } from "react-icons";
import { FaGlobeAfrica } from 'react-icons/fa';
import 'fontsource-roboto';
import {Container,Row,Col} from 'react-bootstrap';

function Worlddata() {

    const [activeCases, setactiveCases] = useState()
    const [newCases, setnewCases] = useState()
    const [newDeaths, setnewDeaths] = useState()
    const [newRecovered, setnewRecovered] = useState()
    const [newCasesPerMillion, setnewCasesPerMillion] = useState()
    const [totalCases, settotalCases] = useState()
    const [totalDeaths, settotalDeaths] = useState()
    const [totalRecovered, settotalRecovered] = useState()


    const getWorldData = () =>{
    let worldData = {
        method: 'GET',
        url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/world',
        headers: {
          'x-rapidapi-key': '0b84bc8a96msh77982fdcfd85153p1d188cjsn5d52d2fa89e1',
          'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
        }
      };
      
      axios.request(worldData).then(function (response) {
        //   console.log(response.data);
        setactiveCases(response.data[0].ActiveCases)
        setnewCases(response.data[0].NewCases)
        setnewDeaths(response.data[0].NewDeaths)
        setnewRecovered(response.data[0].NewRecovered)
        setnewCasesPerMillion(response.data[0].TotCases_1M_Pop)
        settotalCases(response.data[0].TotalCases)
        settotalDeaths(response.data[0].TotalDeaths)
        settotalRecovered(response.data[0].TotalRecovered)


      }).catch(function (error) {
          console.error(error);
      });
    }

    useEffect(()=>{
        getWorldData()
    },[activeCases])
      

    return(
        <Container>
        <Row>
            <Col sm={4}>
            <div className="world-text">
            <div className='icon'>
            <IconContext.Provider value={{color: "grey",margin:"30px", size:'70px', style: { verticalAlign: 'middle' } }}>
             <FaGlobeAfrica />
             </IconContext.Provider>
           </div>
                 <div className="world-head">
                     WORLD
               </div>
           </div>
            </Col>
            <Col sm={8}>
            <Row>
            <Col sm>
                <div className="world-text">
                <div className="world-numbers">
                    {newCases}
                </div>
                    <div className="world-dummy">New Cases</div>
                {/* <br></br> */}
                <div className="world-numbers">
                    {activeCases}
                </div>
                    <div className="world-dummy">Active Cases</div>
                </div>
            </Col>
            <Col sm>
                <div className="world-text">
                <div className="world-numbers">
                    {newCasesPerMillion}
                </div>
                    <div className="world-dummy">Cases / Million</div>
                {/* <br></br> */}
                <div className="world-numbers">
                    {totalCases}
                </div>
                    <div className="world-dummy">Total Cases</div>
                </div>
            </Col>
            <Col sm>
                <div className="world-text">
                <div className="world-numbers">
                    {newDeaths}
                </div>
                    <div className="world-dummy">New Deaths</div>
                {/* <br></br> */}
                <div className="world-numbers">
                    {totalDeaths}
                </div>
                    <div className="world-dummy">Total Deaths</div>
                </div>
            </Col>
            <Col sm>
                <div className="world-text">
                <div className="world-numbers"> 
                    {newRecovered}
                </div>
                    <div className="world-dummy">New Recovered</div>
                {/* <br></br> */}
                <div className="world-numbers">
                    {totalRecovered}
                </div>
                    <div className="world-dummy">Total Recovered</div>
                </div>
            </Col>
            </Row>
        
        
            </Col>
        </Row>
        </Container>
    )
}


export default Worlddata
