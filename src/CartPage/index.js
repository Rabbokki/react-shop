import React, { useState, useEffect } from "react";

function CartPage(){
    //버튼 하나 만들고 누를 때 마다 1씩 증가된 값이 화면에 보이도록 처리
    // useState 이용해서
    useEffect(()=>{
        // for(let i=0; i<10000; i++){
        //     console.log(i);
        // }
        console.log('안녕 난 useEffect Mounted!');
    });
    const [count, setCount] = useState(0);

    
    return(
        <div>
            <h3>Cart Page</h3>
            <button onClick={()=>{
                setCount(count+1);
            }}>증가</button>
            <p>{count}</p>
        </div>
    )
}

export default CartPage;