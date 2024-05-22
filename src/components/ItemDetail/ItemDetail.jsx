import { Link } from "react-router-dom";
import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
  };

  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className="ItemImg" />
      </picture>
      <section>
        <p className="Info">Categoria : {category}</p>
        <p className="Info">Desscripcion : {description}</p>
        <p className="Info">Precio: ${price}</p>
        <p className="Info">Stock: {stock}</p>
      </section>
      <footer className="ItemFooter">
        {quantityAdded > 0 ? (
          <Link to="/cart" className="Button">
            Terminar Compra
          </Link>
        ) : (
          <ItemCount
            initial={0}
            stock={stock}
            onAdd={handleOnAdd}
          />
        )}
      </footer>
    </article>
  );
};

export default ItemDetail;
