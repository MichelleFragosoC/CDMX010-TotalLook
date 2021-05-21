import React from 'react'
import './Promotion.css'


function Promotion(props) {
    return(
        <>
            <div className="card">
                <div className="card-body">
                    <img className="card-body-img" src={props.p.img} alt="bolsa"/>
                    <div clasName="card-body-text">
                        <p>{props.p.name}</p>
                        <p>$ {props.p.price}</p>
                    </div>
                </div>
            </div>
        </>
    );   
}

export default Promotion;
