'use client'
import {getProducts} from '@services/controller-service'
import {useEffect, useState} from 'react'

const Page = () => {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        const getProductsRes = async () => {
          const getProductsResult = await getProducts(
                'https://localhost:7174/product'
            );
            setProducts(getProductsResult);
        }
        getProductsRes();
    }, []);

    return (
        <>
            <h1>Products</h1>
            <ul>
                {products?.map((product => {
                    <li key={product.id}>
                        <dev>Name: {product.name}</dev>
                        <dev>Code: {product.code}</dev>
                        <dev>Description: {product.description}</dev>
                        <dev>Url Price: {product.urlPicture}</dev>
                        <dev>Price: {product.price}</dev>
                    </li>
                }))}
            </ul>
        </>
    );
}

export default Page