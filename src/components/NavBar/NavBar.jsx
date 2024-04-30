import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="NavBar">
      <Link to="/">
        <h3>E-Commerce Filandini</h3>
      </Link>
      <div className="Categories">
        <NavLink to={`/category/SuturasMecanicas`} className="Button">
          Suturas Mecanicas
        </NavLink>
        <NavLink to={`/category/Cardiologia`} className="Button">
          Cardiologia
        </NavLink>
        <NavLink to={`/category/CirugiaPlastica`}>Cirugia Plastica</NavLink>
      </div>
      <CartWidget />
    </nav>
  );
};
export default NavBar;
