import React, { useState } from 'react'

/*
 * Challenge 5: Create a Product
 * 
 * You'll need to get the Fetch Products button
 * working before you can test creating.
 * 
 * When it's all working correctly, when you click
 * the Create Random Product button and WAIT at least 
 * a few seconds a new product should appear in the list
 * 
 * To reset the database open the fake-backend folder
 * and replace the contents of the db.json file
 * with the contents of the BACKUP.json file.
 * Then you'll need to stop (Ctrl + C) the backend
 * and start it again (npm run backend)
 * 
 * If you add products and don't reset the database
 * it may effect the results of other challenges
 * 
 */

const fetchAllProducts = async () => {
    // TODO: Fetch all the products
    // (You can copy this from Challenge 1)
}

const createProduct = async (newProduct) => {
    // TODO: Create a new product with the given data
    // The endpoint for products is "http://localhost:3004/products"
}

/**** DON'T CHANGE ANYTHING BELOW ****/

const NAMES = ["Plexiglass", "Bronze", "Silicon", "Copper", "Wood"]
const PRICES = [23, 9, 45, 62, 94]
const getRandom = (array) => array[Math.floor(Math.random() * array.length)]

export default function Challenge5() {
    const [products, setProducts] = useState([])

    const refreshProducts = async () => {
        const fetchedProducts = await fetchAllProducts();
        setProducts(fetchedProducts);
    }

    const onCreateProductClick = async () => {
        await createProduct({ name: getRandom(NAMES), price: getRandom(PRICES) })
        refreshProducts();
    }

    return (
        <div>
            <button className="btn btn-primary mb-3 me-2" onClick={refreshProducts}>
                Fetch Products
            </button>
            <button className="btn btn-primary mb-3" onClick={onCreateProductClick}>
                Create Random Product
            </button>
            <div>
                { products.map(product => (
                    <div key={product.id}>${ product.price } - { product.name }</div>
                ))}
            </div>
        </div>
    )
}
