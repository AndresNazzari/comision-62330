/* eslint-disable react/prop-types */
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.scss";
import NavbarLink from "./NavbarLink";

const Navbar = ({ categories, title }) => {
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

  return (
    <>
      <div>
        <h1>{title}</h1>
      </div>
      <nav className="navItems">
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
      </nav>
      <CartWidget />
    </>
  );
};

export default Navbar;
