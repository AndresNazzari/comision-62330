/* eslint-disable react/prop-types */
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.scss";
import NavbarLink from "./NavbarLink";
import logo from "../../assets/logo.png";
import { categories } from "../../mock/mockData";
import { Link } from "react-router-dom";

const Navbar = ({ title }) => {

  return (
    <nav>
      <div>
        <h1>{title}</h1>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navItems">
        {categories.map((element, index) => {
          return <NavbarLink key={index} category={element} />;
        })}
      </div>
      <CartWidget />
    </nav>
  );
};

export default Navbar;
