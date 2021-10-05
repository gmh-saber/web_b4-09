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
            <Carousel fade interval={1000}>
                <Carousel.Item className="bg-primary">
                    <img
                        className="d-block mx-auto"
                        src="/bro2.svg"
                        alt="First slide"
                        width="1500px"
                        height="800px"

                    />
                    {/* <Carousel.Caption>
                        <h3>First slide </h3>
                        <p>Our first slide.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item className="bg-primary">
                    <img
                        className="d-block mx-auto"
                        src="/webinar.svg"
                        alt="second slide"
                        width="1500px"
                        height="800px"
                    />

                    {/* <Carousel.Caption>
                        <h3>Second slide </h3>
                        <p>Our second slide.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item className="bg-primary">
                    <img
                        className="d-block mx-auto"
                        src="/imotic.svg"
                        alt="third slide"
                        width="1500px"
                        height="800px"
                    />

                    {/* <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Our first slide.</p>
                    </Carousel.Caption> */}
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
                <Button variant="warning my-2" >
                    See more
                </Button>
            </Link>
        </div>
    );
};

export default Home;