import React from "react";

function Product(props){
    let p = props.product;
    let i = props.index;
    return(
      <div>
    <img src={`${process.env.PUBLIC_URL}./images/shoes${i+1}.jpg`} width='80%' />
            <h4>{p[i].title}</h4>
            <p>{p[i].content}</p>
            </div>
    )
  }
export default Product;