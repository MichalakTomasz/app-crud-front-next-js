'use client'

import {getProducts} from '@services/controllerService'
import {useEffect, useState} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { baseUrl } from '@services/commonConsts';

const Page = () => {
    const [products, setProducts] = useState();

    useEffect(() => {
        const getProductsRes = async () => {
          const response = await getProducts(
                baseUrl + '/product'
            );
            setProducts(response);
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