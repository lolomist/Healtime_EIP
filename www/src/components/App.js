import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Landing from './Landing.js'

const App = ({children}) => {
 return (
     <Container id="App">
         <Row>
         <Landing/>
             {children}
         </Row>
     </Container>
 );
}
export default App;
