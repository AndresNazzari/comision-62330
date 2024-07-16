/* eslint-disable react/prop-types */
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.scss";
import ItemCount from "../ItemCount/ItemCount";
import NavbarLink from "./NavbarLink";

const Navbar = (props) => {
  return (
    <>
      <div>
        <h1>{props.title}</h1>
      </div>
      <nav className="navItems">
        <NavbarLink category={props.categories[0]} />
        <NavbarLink category={props.categories[1]} />
        <NavbarLink category={props.categories[2]} />
        <NavbarLink category={props.categories[3]} />
        <NavbarLink category={props.categories[4]} />
      </nav>
      <ItemCount stock={55} initial={55} />
      <CartWidget />
    </>
  );
};

export default Navbar;
