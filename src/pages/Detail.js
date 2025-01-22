import { useParams } from "react-router-dom";
import Discount from "./Discount";
import { useEffect, useState } from "react";

function Detail(props){
    //useEffect 구조
    // useEffect(()=>{
        //second
    // }, 몇초 - first)
    // ,[] -- third});

    //2초 후에 alert state -> false
    useEffect(()=>{
        setTimeout(()=>{
            setAlert(false);
        }, 2000)
    },)

    useEffect(()=>{
        //호출 시(렌더링 이후) 실행 되는곳
        console.log("1번 렌더링 될 때마다 실행");

        //종료 시 실행되는곳
        return()=>{
            console.log("종료시 실행");
        }
    },[])
    //없을 때 : 매번 실행
    //[] : 1번 실행
    //[state] state가 바뀔때마다 실행

    // function te(){
    //     setTimeout(()=>{
    //         setAlert(false);
    //     }, 2000)
    // }

    const [alert, setAlert] = useState(true);
    const [count, setCount] = useState(0);

    let {id} = useParams();
    let imgId = Number(id) + 1;
    let shoes = props.product[id];
    let strPrice = props.product[id].price.toLocaleString('ko-KR');

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                <img src={`${process.env.PUBLIC_URL}/images/shoes${imgId}.jpg`} 
                width='100%' />
                </div>
                {
                    alert && <Discount/>
                }
                <div className="col-md-6">
                    <h4 className="pt-5">{props.product[id].title}</h4>
                    <p>{props.product[id].content}</p>
                    <p>{strPrice}</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    )
}

export default Detail;