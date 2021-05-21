import React from 'react'

function Promotion(props) {
    return(
        <>
            <div className="containerPromotion">
                <img className="cartProduct" src={props.p.img} alt="bolsa"/>
                <div clasName="cartInfo">
                    <p>{props.p.name}</p>
                    <p>$ {props.p.price}</p>
                </div>
            </div>
        </>
    );   
}

export default Promotion;
