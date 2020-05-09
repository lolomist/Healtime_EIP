import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Jumbotron, Button } from 'react-bootstrap';

const Landing = () =>  {
    return (
        <Container id="Landing" className="container-fluid">
          <Jumbotron id="landing-jumbotron">
            <h1>Welcome to the Heal Time landing page</h1>
            <h6>This is Just a first test for the website</h6>
            <Button className="nav-btn">
            <Link className="link" to="first">I understand - take me to the app</Link>
            </Button>
          </Jumbotron>
        </Container>
    );
}

export default Landing;