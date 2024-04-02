import CartWidget from "../CartWidget/CartWidget";
const NavBar = () => {
  return (
    <nav>
      <h3>Ecomerce-Filandini</h3>
      <div>
        <button>Suturas Mecanicas</button>
        <button>Cardiologia</button>
        <button>Mallas de Hernioplastia</button>
        <button>Electrocirugia</button>
      </div>
      <CartWidget/>
    </nav>

  );
};
export default NavBar;
