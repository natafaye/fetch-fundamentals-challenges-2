import React, { useState } from 'react'

/*
 * Challenge 6: Fetch an Order and User and Product
 * 
 * When it's working correctly, when you click
 * the button and WAIT a few seconds you should see:
 * 
 * Hanny ordered Stone for $13
 * 
 */

const fetchOrderById = async (id) => {
    // TODO: Fetch one order by id
    // The endpoint for products is "http://localhost:3004/orders"
}

const fetchProductById = async (id) => {
    // TODO: Fetch one product by id
    // The endpoint for products is "http://localhost:3004/products"
}

const fetchUserById = async (id) => {
    // TODO: Fetch one user by id
    // (You can copy this from Challenge 2)
}

/**** DON'T CHANGE ANYTHING BELOW ****/

export default function Challenge6() {
    const [user, setUser] = useState({ name: "NOT FETCHED" })
    const [product, setProduct] = useState({ name: "NOT FETCHED", price: "NOT FETCHED"})

    const refreshUser = async (id) => {
        const fetchedUser = await fetchUserById(id)
        setUser(fetchedUser)
    }

    const refreshProduct = async (id) => {
        const fetchedProduct = await fetchProductById(id)
        setProduct(fetchedProduct)
    }

    const onFetchDataClick = async () => {
        const fetchedOrder = await fetchOrderById(1)
        // If you remove the await on the next line,
        // the user and product will be fetched at the same time
        await refreshUser(fetchedOrder.userId)
        refreshProduct(fetchedOrder.productId)
    }

    return (
        <div>
            <button className="btn btn-primary mb-3" onClick={onFetchDataClick}>
                Fetch Order Data
            </button>
            <p>{ user.name } ordered { product.name } for ${ product.price }</p>
        </div>
    )
}
