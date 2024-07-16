/* eslint-disable react/prop-types */
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import styles from "./ItemListContainer.module.scss";

const ItemListContainer = ({ title, otroTitle }) => {
  // const title = prop.title; // se puede reemplazar con destructuring: const { title } = prop;
  // const otroTitle = prop.otroTitle; // se puede reemplazar con destructuring: const { otroTitle } = prop;
  // se puede reemplazar con destructuring
  // const { title, otroTitle } = prop;
  let titleToShow;
  if (title != undefined) {
    titleToShow = title;
  } else {
    titleToShow = otroTitle;
  }

  return (
    <>
      <div className={styles.container}>
        <div>{titleToShow}</div>
        <ItemList />
        <ItemCount stock={10} initial={1} />
      </div>
    </>
  );
};

export default ItemListContainer;
