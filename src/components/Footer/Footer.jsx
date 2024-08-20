import { items } from "../../mock/mockData";
import { db } from "../../firebase/dbConnection";
import {collection, addDoc} from "firebase/firestore";
import { useEffect } from "react";

const Footer = () => {

  const addProducts = () => {
    const productsCollection = collection(db, "productos");

    items.forEach((item)=>{
      addDoc(productsCollection, item)
      .then(doc => {
        console.log("Producto agregado con ID: ", doc.id)
      })
      .catch(error => {
        console.error("Error al agregar el producto: ", error)})
    })
  }

  return (
    <footer>
      <button onClick={addProducts}>agregar productos a base de datos</button>
    </footer>);
};

export default Footer;
