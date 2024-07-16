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
   
     
      <CartWidget />
    </>
  );
};

export default Navbar;
