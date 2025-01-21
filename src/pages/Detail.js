import { useParams } from "react-router-dom";

function Detail(props){
    let {id} = useParams();
    let imgId = Number(id) + 1;
    let shoes = props.product[id];
    console.log(shoes.title);
    let strPrice = props.product[id].price.toLocaleString('ko-KR');

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                <img src={`${process.env.PUBLIC_URL}/images/shoes${imgId}.jpg`} 
                width='100%' />
                </div>
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