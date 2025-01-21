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
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import Detail from './pages/Detail';
import AboutPage from './pages/AboutPage';
import Event from './pages/AboutPage/Event';

function App() {
  const [product, setProduct] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{
              navigate("/")
            }}>
              Home
            </Nav.Link>
            <Nav.Link onClick={()=>{
              navigate("/cart")
            }}>
              Cart
              </Nav.Link>
              <Nav.Link onClick={()=>{
              navigate("/about")
            }}>
              About
              </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg'></div>
      {/* 라우터 처리 */}
      <Routes>
        <Route path="/" element = {<div>메인 페이지</div>} />
        <Route index element = {<div>홈...</div>} />
        <Route path="/detail/:id" element = {
          <div>
            <Detail product = {product}/>
          </div>} />
        <Route path="/cart" element = {<div>장바구니 페이지</div>} />
        <Route path="/about" element = {<div><AboutPage/></div>}>
          <Route path='member' element = {<div>직원 소개 페이지</div>}> </Route>
          <Route path='location' element = {<div>길 안내 페이지</div>}> </Route>
        </Route>
        <Route path='/event' element = {<div> <Event/> </div>}>
        <Route path='one' element = {<div>첫 주문시 양배추즙 서비스</div>}></Route>
        <Route path='two' element = {<div>생일 기념 쿠폰 받기</div>}></Route>
        </Route>        
        <Route path='*' element={
          <div>
            <h4>
            Page Not Found 404 Error
            </h4>
            <p>

            </p>
          </div>
        }> </Route>
      </Routes>

      <Container>
      <Row className="justify-content-md-center">
        {product.map((x,index)=>{
          return(
          <Col>
          <Product product={product} index = {index} navigate = {navigate}></Product>
          </Col>
          )
        })}
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
