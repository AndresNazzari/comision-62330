/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { collection, getDocs, query, where} from "firebase/firestore";
import { db } from "../../firebase/dbConnection";
import { useCartContext } from "../../context/CartContext";
import ItemList from "../ItemList/ItemList";
import styles from "./ItemListContainer.module.scss";
import { useParams } from "react-router-dom";
import { Spinner } from "../spinner/Spinner";

//clase 3 16-7-24
// Este componente tiene la logica de traer los productos desde el "backend",
// por el momento solo los importamos de nuestro mock

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true);
  const { titulo, titulo2 } = useCartContext();

  let titleToShow = titulo + " " + titulo2;


  useEffect(() => {
    setLoading(true);
    
    let productsCollection = collection(db, "productos")

    if (categoryId) {
      productsCollection = query(productsCollection, where("category", "array-contains", categoryId));
    }
    
    getDocs(productsCollection)
    .then(({docs}) => {
      const prodFromDocs = docs.map((doc)=>({
        id: doc.id,
        ...doc.data()
      }))
      setProducts(prodFromDocs)
      setLoading(false);
    })
    .catch((error) => {
      console.error("Error getting documents: ", error);
    });
 
  }, [categoryId]);

  return (
        <main>
          <div className={styles.container}>
            <div>Titulo?:  {titleToShow}</div>
            { loading 
              ? <Spinner /> 
              : <ItemList products={products} />}
          </div>
        </main>
  );
};

export default ItemListContainer;
