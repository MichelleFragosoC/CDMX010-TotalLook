import React, {useState, useEffect}from 'react'
import Promotion from './Promotion.js'
import './Promotions.css'

function Promotions() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProduct();
    }, [])
    
    const getProduct = async () => {
        const data = await fetch('http://localhost:5000/clothes');
        const products = await data.json();
        setProducts(products);
    }


    return(
        <>
            <div>
            {products.map((p) => (
                <Promotion p={p}/>
            ))}
            </div>
        </>
    );
    
}

export default Promotions;