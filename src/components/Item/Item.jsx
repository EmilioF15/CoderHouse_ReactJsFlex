const Item = ({ id, name, img, price, stock, category }) => {
  return (
    <article className="CardItem">
      <header className="Header">
        <h2>{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className="ItemImg" />
      </picture>
      <section>
        <p className="Info">Precio : {price}</p>
        <p className="Info">Stock Disponible: {stock}</p>
      </section>
      <footer className="ItemFooter">
        <link to={`/item/${id}`} className="Option"></link>
      </footer>
    </article>
  );
};

export default Item;
