import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
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
        <ItemCount
          initial={0}
          stock={stock}
          onAdd={(quantity) => console.log("Cantidad Agregada", quantity)}
        />
      </footer>
    </article>
  );
};

export default ItemDetail;
