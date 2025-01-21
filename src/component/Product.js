import React from "react";
import { useParams } from "react-router-dom";


function Product(props){
    let nav = props.navigate;
    let p = props.product;
    let i = props.index;
    let productId = p[i].id;
    let {id} = useParams();
    let id2 = Number(id);

    
      
    return(
      <div>
    <img onClick={()=>{
      
        nav(`/detail/${productId}`);
      }} src={`${process.env.PUBLIC_URL}/images/shoes${i+1}.jpg`} width='80%' />
            <h4>{p[i].title}</h4>
            <p>{p[i].content}</p>
            </div>
    )
  }
export default Product;