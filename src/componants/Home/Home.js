import React from 'react';
import { useEffect, useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import Cards from '../Cards/Cards';
import { Link } from "react-router-dom";


const Home = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('/course_data_api.json')
            .then(res => res.json())
            .then(data => setCourses(data.slice(0, 4)))
    }, [])
    return (
        <div>
            <Carousel fade interval={1500}>
                <Carousel.Item>
                    <img
                        className="d-block mx-auto"
                        src="/coaching.jpg"
                        alt="First slide"
                        width="1500px"
                        height="800px"

                    />
                    <Carousel.Caption>
                        <h3>First slide </h3>
                        <p>Our first slide.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block mx-auto"
                        src="/confused.jpg"
                        alt="second slide"
                        width="1500px"
                        height="800px"
                    />

                    <Carousel.Caption>
                        <h3>Second slide </h3>
                        <p>Our second slide.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block mx-auto"
                        src="/learn.jpg"
                        alt="third slide"
                        width="1500px"
                        height="800px"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Our first slide.</p>
                    </Carousel.Caption>
                </Carousel.Item>


            </Carousel>
            <h1>Our Courses</h1>
            <div className="container">

                <Row xs={3} md={4} className="g-4 mt-4">
                    {
                        courses.map(course => <Cards courses={course}>
                        </Cards>)
                    }
                </Row>
            </div >
            <Link to="/service">
                <Button variant="warning" >
                    See more
                </Button>
            </Link>
        </div>
    );
};

export default Home;