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
import CartPage from './CartPage';
import axios from 'axios';

function App() {
  const [product, setProduct] = useState(data);
  let navigate = useNavigate();
  const threeProduct = [];
  for(let i=0; i<product.length; i+=3){
    threeProduct.push(product.slice(i,i+3));
  }

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
        <Route path="/cart" element = {
          <div>
            <CartPage></CartPage>
          </div>
          } />
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
          <Col md={4}>
            <Product product={product} index = {index} navigate = {navigate}></Product>
          </Col>
          )
        })}
      </Row>
      <button onClick={()=>{
        axios.get('https://rabbokki.github.io/js/react_data_02.json')
        .then((result)=>{
          //요청 성공시 처리할 곳
          console.log(result.data);
          let temp = [...new Set([...product ,...result.data])];
          // console.log(temp);
          setProduct([...temp]);
          if(product.length > 9){
            alert('데이터가 없습니다.');
          }
        })
        .catch(()=>{
          //요청 실패 시 처리할 곳
          console.log("실패함");
        })
      }}>데이터 가져오기</button>
    </Container>
    </div>
  );
}

export default App;
