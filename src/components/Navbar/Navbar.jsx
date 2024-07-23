/* eslint-disable react/prop-types */
import CartWidget from "../CartWidget/CartWidget";
//import { getCategories } from "../../utils/fetchData";
import "./Navbar.scss";
import NavbarLink from "./NavbarLink";
import logo from "../../assets/logo.png";
//import { useEffect, useState } from "react";
import { categories } from "../../mock/mockData";

const Navbar = ({ title }) => {
  //const [categories, setCategories] = useState([]);
  // console.log(categories);

  // ForEach hace algo en cada iteracion pero no retorna nada
  // categories.forEach((element) => {
  //   "algo";
  // });

  // ForEach hace algo en cada iteracion pero no retorna nada
  // const newArray2 = categories.map((element) => {
  //   return <NavbarLink category={element} />;
  // });

  // console.log(newArray2);

  // ["normal", "electric", "fire", "water", "grass"];

  // useEffect(() => {
  //   getCategories().then((data) => {
  //     console.log(data);
  //     setCategories(data);
  //   });
  // }, []);

  return (
    <nav>
      <div>
        <h1>{title}</h1>
        <img src={logo} alt="" />
      </div>
      <div className="navItems">
        {/* 
        <NavbarLink category={categories[0]} />
        <NavbarLink category={categories[1]} />
        <NavbarLink category={categories[2]} />
        <NavbarLink category={categories[3]} />
        <NavbarLink category={categories[4]} /> 
        */}

        {categories.map((element, index) => {
          //console.log(`estoy en la posicion ${index} del array`);
          return <NavbarLink key={index} category={element} />;
        })}
      </div>
      <CartWidget />
    </nav>
  );
};

export default Navbar;
