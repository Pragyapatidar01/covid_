import React,{useState,useEffect} from 'react'
import {Container,Row,Col} from 'react-bootstrap';
import axios from 'axios';
import NewsCard from './NewsCard';


function News() {

    const [news,setnews] = useState([])

    function getNews(){

        var options = {
            method: 'GET',
            url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-coronavirus-news/0',
            headers: {
              'x-rapidapi-key': '0b84bc8a96msh77982fdcfd85153p1d188cjsn5d52d2fa89e1',
              'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
            //   console.log(response.data);
            setnews(response.data.news)
    
          }).catch(function (error) {
              console.error(error);
          });
    }
    
    useEffect(()=>{
    getNews()
    },[])
    
    return (
        // <div>
            <Container>
            <Row className="news-row">
                <Col className="covid-news" >
                    <h6>COVID</h6>
                    <h2>NEWS</h2>
                </Col>
            </Row>
            <br></br>
            <section className="contents">
            {
                news.map(n =>(
                    <NewsCard key={n.news_id} news={n} />
                ))
            }
            </section>
            </Container>
        //  </div> 
    )
}

export default News
