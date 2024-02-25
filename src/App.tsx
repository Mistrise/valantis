import React, {useEffect, useState} from 'react';
import authKey from "./helpers/authGenerator";
import CardContainer from "./components /CardContainer/CardContainer";
import {Card} from "./components /Card/Card";
import NavBar from "./components /NavBar/NavBar";

interface Product {
  brand: string | null
  id: string
  price: number
  product: string
}

function App() {
  const [ids, setIds] = useState<string[]>([])

  const [products, setProducts] = useState<Product[]>([
    {
      brand: null,
      id: 'init',
      price: 0,
      product: '',
    }
  ])

  const bodyIds = {
    "action": "get_ids",
    "params": {"limit": 50}
  }

  const fetchIds = async () => {
    try {
      const response = await fetch('http://api.valantis.store:40000/', {
        method: 'POST',
        headers: {
          "X-Auth": authKey,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(bodyIds)
      })

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json()
      setIds([data.result])
    } catch (error) {
      console.error('Error is:', error)
    }
  }

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://api.valantis.store:40000/', {
        method: 'POST',
        headers: {
          "X-Auth": authKey,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "action": "get_items",
          "params": {"ids": ids[0]}
        })
      })

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json()
      setProducts([...data.result])
    } catch (error) {
      console.error('Error is:', error)
    }
  }

  useEffect( () => {
    fetchIds()
    fetchProducts()
  }, [ids]);

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
      </>
  );
}

export default App;
