'use client'
import {getProducts} from '@services/controllerService'
import {useEffect, useState} from 'react'

const Page = () => {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        const getProductsRes = async () => {
          const getProductsResult = await getProducts(
                'https://localhost:7174/product'
            );
            const data = await getProductsResult; 
            setProducts(data);
        }
        getProductsRes();
    }, []);

    return (
        <>
            <h1>Products</h1>
            <ul>
                {products?.map((product) => (
                    <li key={product.id}>
                        <div>Id: {product.id}</div>
                        <div>Name: {product.name}</div>
                        <div>Code: {product.code}</div>
                        <div>Description: {product.description}</div>
                        <div>Url Price: {product.urlPicture}</div>
                        <div>Price: {product.price}</div>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Page