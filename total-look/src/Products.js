import React, {useState, useEffect}from 'react'
import Product from './Product.js'


function Products() {

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
                <Product p={p}/>
            ))}
            </div>
        </>
    );
    
}

export default Products;
