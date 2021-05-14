import React from "react";
import { Container } from '@material-ui/core';
import { Col, Row } from 'react-bootstrap';
import './App.css';
// import Header from './components/Header';
import IndiaData from './components/IndiaData';
import Linegraph from './components/Linegraph';
import News from './components/News';
import NewTable from './components/NewTable';
import Worlddata from './components/Worlddata';


function App() {
  return (
    <div className="App">
      {/* <Container>
      <Header />
      </Container> */}
      
      <Container className="world-outer">
      <div className="world-container">
        <Worlddata />
      </div>
        <br></br>
        <br></br>
      </Container>
        <Container>
          <Row>
            <Col sm>
              <Col sm className="india-container">
                  <IndiaData />
              </Col>
              <Col sm className="graph-container">
                  <Linegraph />
              </Col>
            </Col>
            <Col sm className="table-container">
                <NewTable />
              <br></br>
              <br></br>
            </Col>
          </Row>
        </Container>
        <br></br>
        <br></br>
        <br></br>
    <News/>
    <br></br>
    </div>
  );
}


export default App;
