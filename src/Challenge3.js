import React, { useState } from 'react'

/*
 * Challenge 3: Delete a Product
 * 
 * You'll need to get the Fetch Products button
 * working before you can test deleting.
 * 
 * When it's all working correctly, when you click
 * a delete button and WAIT a few seconds that product
 * should be deleted and no longer show up in the list
 * 
 * To reset the database:
 * Open the fake-backend folder and replace the contents 
 * of the db.json file with the contents of the BACKUP.json file.
 * Then you'll need to stop the backend (Ctrl + C)
 * and start it again (npm run backend)
 * 
 * If you delete products and don't reset the database
 * it may effect the results of other challenges
 * 
 */

const fetchAllProducts = async () => {
    // TODO: Fetch all the products
    // (You can copy this from Challenge 1)
}

const deleteProduct = async (id) => {
    // TODO: Delete the product with the passed in id
    // The endpoint for products is "http://localhost:3004/products"
}

/**** DON'T CHANGE ANYTHING BELOW ****/

export default function Challenge3() {
    const [products, setProducts] = useState([]);

    const refreshProducts = async () => {
        const fetchedProducts = await fetchAllProducts();
        setProducts(fetchedProducts);
    }

    const onDeleteMovieClick = async (id) => {
        await deleteProduct(id)
        refreshProducts();
    }

    return (
        <div>
            <button className="btn btn-primary mb-4" onClick={refreshProducts}>
                Fetch Products
            </button>
            <div>
                { products.map(product => (
                    <div key={product.id} className="mb-2">
                        <button className="btn btn-danger me-2" onClick={() => onDeleteMovieClick(product.id)}>
                            Delete
                        </button>
                        ${ product.price } - { product.name }
                    </div>
                ))}
            </div>
        </div>
    )
}
