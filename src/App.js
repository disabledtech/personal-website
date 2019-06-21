import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './components/Header';
function App() {

  return (
    <div className="App">
      <Container>

        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row>

          <Col className="text-center zoom mb-3" s={12} md={4}>
            <a href="www.linkedin.com/in/disabledtech" target="_blank" rel="noopener noreferrer">
              <i 
                className="fab fa-linkedin-in fa-5x border border-light rounded-circle p-4"
                aria-hidden="true" 
                aria-label="Find me on LinkedIn"
                title="Find me on LinkedIn"
              >
              </i>
            </a>
          </Col>

          <Col className="text-center zoom mb-3" s={12} md={4}>
            <a href="git" target="_blank" rel="noopener noreferrer">
              <i 
                className="fas fa-at fa-5x border border-light rounded-circle p-4"
                aria-hidden="true" 
                aria-label="Email me"
                title="Email me"
              >
              </i>
            </a>
          </Col>

          <Col className="text-center zoom mb-3" s={12} md={4}>
            <a href="https://github.com/disabledtech" target="_blank" rel="noopener noreferrer">
              <i 
                className="fab fa-github fa-5x border border-light rounded-circle p-4" 
                aria-hidden="true" 
                aria-label="Find me on Github"
                title="Find me on Github"
              >
              </i>   
            </a>     
          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default App;
