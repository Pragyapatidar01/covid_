import React from 'react'
import {Container,Row,Col} from 'react-bootstrap';

const styles = {
    col: {
        paddingLeft: 0,
        paddingRight: 0
    }
};
function NewsCard({news}) {
    return (
        // <Col>
        <div className='content'>
           
                <Col style={styles.col} className="image">
                <a href={news.link} target="_blank" rel="noreferrer"> 
                    <img src={news.urlToImage} alt='' width='100%' height="100%"/>
                </a>
                </Col>
            
            <Col style={styles.col} className="heading">
            
                <div className="news-title">
                <a href={news.link} className="news-line" target="_blank" rel="noreferrer">
                {news.title}
                </a>
                </div>
            
            </Col>
            
        </div>
    )
}

export default NewsCard
