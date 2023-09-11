import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import {Col, Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './styles.module.css'

const Home = () => {
    const [allArticles, setArticles] = useState([]);
    useEffect(()=>{
        const fetchData = async () =>{
            try{

                const res = await axios.get('https://node-express-conduit.appspot.com/api/articles?limit=10&offset=0')
                
                setArticles(res.data.articles);
               
                
            }
            catch(error){
                console.log(error)
            }
        }
        fetchData();
    },[])
    return (
        <>
            <Container>
                <Row>
                    <Col md={9}>
                    {allArticles?.map((article)=>{
                                return(
                                    <>
                                        <Row>
                                            <Col>  
                                            
                                            <img src={article.author.image} alt="" />
                                            </Col>
                                            <Col>{article.author.username}</Col>
                                            <Col>favorites</Col>
                                        </Row>
                                        <Row>
                                            <div>
                                                <h3>{article.title}</h3>
                                                <p>{article.description}</p>
                                            </div>
                                        </Row>
                                    </>
                                )
                            }) 
                    }
                    </Col>
                        
                    <Col md={3}>
                        <h3>Tags</h3>
                        {allArticles?.map((article)=>{
                                return(
                                    <Link variant="secondary">{article.tagList}</Link>
                                )
                            }) 
                    }
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Home;