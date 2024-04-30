import { useState, useEffect } from "react";
import { getProductById } from "../../asyncMock.js";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById("1")
      .then((response) => {
        setProduct(response);
      })
      .cath((err) => console.error(err));
  }, []);

  return (
    <div className="ItemDetailContainer">
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;
