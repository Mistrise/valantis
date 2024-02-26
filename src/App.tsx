import React, {useCallback, useEffect, useState} from 'react';
import GridContainer from "./components/CardContainer/GridContainer";
import {JewelryCard} from "./components/Card/JewelryCard";
import DenseBar from "./components/NavBar/DenseBar";
import {getPaginatedProducts} from "./helpers/products";
import {Button, Container, Grid, Typography} from "@mui/material";

interface Product {
    brand?: string | null
    id: string
    price: number
    product: string
}

function App() {

    const [products, setProducts] = useState<Product[]>([])

    const [page, setPage] = useState(1)

    useEffect( () => {
        getPaginatedProducts(page).then((result) => {
            setProducts(result)
        })
    }, [page]);

    const goToNextPage = useCallback(() => {
        setPage(page + 1)
    }, [page]);

    const goToPrevPage = useCallback(() => {
        setPage(page - 1)
    }, [page]);

    return (
        <>
            <DenseBar/>
            <Container maxWidth='lg'>
                <GridContainer>
                    {products.map(product => {
                        return (
                            <Grid item xs={2} sm={4} md={4} key={product.id}>
                                <JewelryCard
                                key={product.id}
                                id={product.id}
                                price={product.price}
                                brand={product.brand}
                                product={product.product}
                                />
                            </Grid>)
                    })}
                </GridContainer>
                <Button variant='contained' onClick={goToPrevPage}>Prev</Button>
                <Typography display='inline-block' color="text.secondary" >{page}</Typography>
                <Button variant='contained' onClick={goToNextPage}>Next</Button>
            </Container>
        </>
    );
}

export default App;
