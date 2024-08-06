/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useCartContext } from "../../context/CartContext";
import ItemList from "../ItemList/ItemList";
import styles from "./ItemListContainer.module.scss";
import { getProducts } from "../../utils/fetchData";
import { useParams } from "react-router-dom";
import { Spinner } from "../spinner/Spinner";

//clase 3 16-7-24
// Este componente tiene la logica de traer los productos desde el "backend",
// por el momento solo los importamos de nuestro mock

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  //const [cat, setCat] = useState("normal");
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true);
  const { titulo, titulo2 } = useCartContext();
  // ciclo de vida del componente
  // useEffect recibe dos parametros, una funcion y un array de dependencias
  // cuando se monta el componente
  // cuando se actualiza el componente
  // cuando se desmonta el componente
  let titleToShow = titulo + " " + titulo2;


  useEffect(() => {
    console.log("Se termino de montar el componente");
    setLoading(true);
    getProducts(categoryId) // devuelve una promesa que va a tardar 2 segundos en resolverse
      .then((res) => {
        console.log("Se resolvio la promesa");
        setProducts(res);
        console.log("Se actualizaron los productos");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("finalizo la promesa");
        setLoading(false);
      });


      return () => {
        console.log("Se desmonto el componente");
      }

  }, [categoryId]);

  // try {

  // } catch (error) {

  // }
  // finally {}

  // const title = prop.title; // se puede reemplazar con destructuring: const { title } = prop;
  // const otroTitle = prop.otroTitle; // se puede reemplazar con destructuring: const { otroTitle } = prop;
  // se puede reemplazar con destructuring
  // const { title, otroTitle } = prop;

  
  return (
        <main>
          {console.log("Renderizo el componente")}
          {/* <button onClick={() => setCat("grass")}>Set Cat = grass</button>
          <button onClick={() => setCat("fire")}>Set Cat = fire</button>
          <button onClick={() => setCat("electric")}>Set Cat = electric</button>
          <button onClick={() => setCat("normal")}>Set Cat = normal</button> */}
          <div className={styles.container}>
            <div>Titulo?:  {titleToShow}</div>
            { loading 
              ? <Spinner /> 
              : <ItemList products={products} />}
            {/* <ItemCount stock={10} initial={1} /> */}
          </div>
        </main>
  );
};

export default ItemListContainer;
