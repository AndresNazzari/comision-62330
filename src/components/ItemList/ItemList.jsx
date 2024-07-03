import Item from "../Item/Item";
import styles from "./ItemList.module.scss";

const ItemList = () => {
  return (
    <>
      <div className={styles.container}>
        <div>Item List</div>
        <Item />
      </div>
    </>
  );
};

export default ItemList;
