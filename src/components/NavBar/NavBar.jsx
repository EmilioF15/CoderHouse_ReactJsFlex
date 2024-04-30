import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="NavBar">
      <Link to="/">
        <h3>E-Commerce Filandini</h3>
      </Link>
      <div className="Categories">
        <NavLink
          to={`/category/celulares`}
          className="Button"
        >
          Celulares
        </NavLink>
        <button>Suturas Mecan</button>
        <button>Cardiologia</button>
        <button>Mallas de Hernioplastia</button>
        <button>Electrocirugia</button>
      </div>
      <CartWidget />
    </nav>
  );
};
export default NavBar;
