import React, { useState } from 'react'

/*
 * Challenge 1: Fetch All Products
 * 
 * When it's working correctly, when you click
 * the button and wait a second you should see:
 * 
 * $13 - Stone
 * $38 - Brass
 * $86 - Aluminum
 * $45 - Rubber
 * $85 - Steel
 * $17 - Plastic
 * 
 */

const fetchAllProducts = async () => {
    // TODO: Fetch all the products
    // The endpoint for products is "http://localhost:3004/products"
}

/**** DON'T CHANGE ANYTHING BELOW ****/

export default function Challenge1() {
    const [products, setProducts] = useState([])

    const onFetchProducts = async () => {
        const products = await fetchAllProducts();
        setProducts(products);
    }

    return (
        <div>
            <button className="btn btn-primary mb-3" onClick={onFetchProducts}>
                Fetch Products
            </button>
            <div>
                { products.map(product => (
                    <div key={product.id}>${ product.price } - { product.name }</div>
                ))}
            </div>
        </div>
    )
}
