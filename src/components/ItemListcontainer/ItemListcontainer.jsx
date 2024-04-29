import { useEffect, useState } from "react";
import {getProducts} from "../../asyncMock.js"
import ItemList from "../ItemList/ItemList.jsx"
const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products={products}></ItemList>
    </div>
  );
};
export default ItemListContainer;
