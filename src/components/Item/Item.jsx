import ItemDetail from "../ItemDetail/ItemDetail";

const Item = ({ id, name, img, price, stock, category }) => {
  return (
    <article className="CardItem">
    <ItemDetail id={id} name={name} img={img} price={price} stock={stock} category={category} />
    </article>
  );
};

export default Item;
