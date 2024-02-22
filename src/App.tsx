import React, {useEffect, useState} from 'react';

interface DataFromApi {
  action: string,
  result: string[]
}

//@ts-nocheck
function App() {
  const [products, setProducts] = useState([])
  useEffect( () => {
    const currentDate = new Date()
    // @ts-ignore
    fetch('http://api.valantis.store:40000/', {
      method: 'POST',
      headers: {
        "X-Auth": `md5("password_${currentDate.getFullYear()}${currentDate.getMonth()}${currentDate.getDate()}")`
      },
      body: {
        // @ts-ignore
        "action": "get_ids",
        "params": {"offset": 10, "limit": 3}
      }
    })
        .then(res => res.json())
        // @ts-ignore
        .then((data: DataFromApi) => setProducts([...products, data.result]))
  }, [products]);
  return (
    <div>
      {products.map(e => {
        return <div key={e}>{e}</div>
      })}
    </div>
  );
}

export default App;
