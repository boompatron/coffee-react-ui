import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import React, {useEffect, useState} from "react";
import {ProductList} from "./components/ProductList";
import {Summary} from "./components/Summary";
import axios from "axios";


function App() {
    const [products, setProducts ] = useState([
        {id: 'uuid-1', productName: '콜롬비아 커피', category: '원두', price: 25400},
        {id: 'uuid-2', productName: '아라비카 커피', category: '원두', price: 5000},
        {id: 'uuid-3', productName: '가나 커피', category: '원두', price:  65900}
    ]);

    const [items, setiItems ] = useState([
    ]);

    const handleAddClicked = id => {
        console.info(products.find(v => v.id === id), " clicked!!")
        const product = products.find(v => v.id === id);
        const found = items.find(v => v.id === id)
        const updatedItems =
            found ? items.map(v => (v.id === id) ? { ...v , count: v.count + 1} : v) : [...items, {...product, count: 1}]
        setiItems(updatedItems);
    }

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/products')
            .then(v => setProducts(v.data));
    }, []);


  return (
      <body className="container-fluid">
      <div className="row justify-content-center m-4">
        <h1 className="text-center">Grids &amp; Circle</h1>
      </div>
      <div className="card">
        <div className="row">
          <div className="col-md-8 mt-4 d-flex flex-column align-items-start p-3 pt-0">
            <ProductList products={products} onAddClick={handleAddClicked}/>
          </div>
          <div className="col-md-4 summary p-4">
            <Summary items={items}/>
          </div>
        </div>
      </div>
      </body>
  );
}

export default App;
