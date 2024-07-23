/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const NavbarLink = ({ category }) => {
  // "/" + category;
  return (
    <NavLink to={`/${category}`} className="navItem">
      {category}
    </NavLink>
  );
};

export default NavbarLink;
