import React, {useEffect, useState} from 'react';
import authKey from "./helpers/authGenerator";

function App() {
  const [products, setProducts] = useState([])

  const body = {
    "action": "filter",
    "params": {"price": 17500.0}
  }

  useEffect( () => {

    fetch('http://api.valantis.store:40000/', {
      method: 'POST',
      headers: {
        "X-Auth": authKey,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
        .then(res => res.json())
        // @ts-ignore
        .then((data) => setProducts([...products, data.result]))
  }, []);
  return (
    <div>
      {products}
    </div>
  );
}

export default App;
