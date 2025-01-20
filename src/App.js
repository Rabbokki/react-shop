import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from'./data/shoes-data';
import { useState } from 'react';
import Product from './component/Product';

function App() {
  const [product, setProduct] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg'></div>
      <Container>
      <Row className="justify-content-md-center">
        {product.map((x,index)=>{
          return(
          <Col>
          <Product product={product} index = {index}></Product>
          </Col>
          )
        })}
        {/* <Col>
        <img src={process.env.PUBLIC_URL + './images/shoes1.jpg'} width='80%' />
        <h4>{product[0].title}</h4>
        <p>{product[0].content}</p>
        </Col>
        <Col>
        <img src={process.env.PUBLIC_URL + './images/shoes2.jpg'} width='80%' />
        <h4>{product[1].title}</h4>
        <p>{product[1].content}</p>
        </Col>
        <Col>
        <img src={process.env.PUBLIC_URL + './images/shoes3.jpg'} width='80%' />
        <h4>{product[2].title}</h4>
        <p>{product[2].content}</p>
        </Col> */}
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
