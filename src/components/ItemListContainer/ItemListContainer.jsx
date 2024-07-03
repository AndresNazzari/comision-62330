/* eslint-disable react/prop-types */
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import styles from "./ItemListContainer.module.scss";

const ItemListContainer = ({ title }) => {
  return (
    <>
      <div className={styles.container}>
        <div>{title}</div>
        <ItemList />
        <ItemCount stock={10} initial={1} />
      </div>
    </>
  );
};

export default ItemListContainer;
