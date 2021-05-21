import React from 'react'

function Product(props) {
    return(
        <>
            <div clasName="containerProduct">
                <img className="cartProduct" src={props.p.img} alt="bolsa"/>
                <div clasName="cartInfo">
                    <p>{props.p.name}</p>
                    <p>$ {props.p.price}</p>
                </div>
            </div>
        </>
    );   
}

export default Product;
