'use client'
import {getProducts} from '@services/controllerService'
import {useEffect, useState} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

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
            <TableContainer >
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Code</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Url Picture</TableCell>
                            <TableCell>Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            products?.map(product => (
                                <TableRow
                                key={product.id}
                                >
                                    <TableCell>{product.id}</TableCell>
                                    <TableCell>{product.name}</TableCell>
                                    <TableCell>{product.code}</TableCell>
                                    <TableCell>{product.description}</TableCell>
                                    <TableCell>{product.urlPicture}</TableCell>
                                    <TableCell>{product.price}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default Page