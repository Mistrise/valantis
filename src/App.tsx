import React, {useEffect, useState} from 'react';
import authKey from "./helpers/authGenerator";

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

  useEffect( () => {
    fetch('http://api.valantis.store:40000/', {
      method: 'POST',
      headers: {
        "X-Auth": authKey,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bodyIds)
    })
        .then(res => res.json())
        .then((data) => setIds([data.result]))
        .catch(err => console.error(err))
  }, []);

  useEffect(() => {

    fetch('http://api.valantis.store:40000/', {
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
        .then(res => res.json())
        .then((data) => setProducts([...data.result]))
        .catch(err => console.error(err))
  }, [ids])
  return (
    <div>
      {products.map(e => {
        return <div key={e.id}>
          {e.product}
        </div>
      })}
    </div>
  );
}

export default App;
