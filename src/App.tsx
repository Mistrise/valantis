import React, {useCallback, useEffect, useState} from 'react';
import authKey from "./helpers/authGenerator";
import CardContainer from "./components/CardContainer/CardContainer";
import {Card} from "./components/Card/Card";
import NavBar from "./components/NavBar/NavBar";
import {getPaginatedProducts} from "./helpers/products";

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
            <NavBar/>
            <CardContainer>
                {products.map(product => {
                    return <Card
                        key={product.id}
                        id={product.id}
                        price={product.price}
                        brand={product.brand}
                        product={product.product}
                    />
                })}
            </CardContainer>
            <button onClick={goToPrevPage}>-</button>
            {page}
            <button onClick={goToNextPage}>+</button>
        </>
    );
}

export default App;
