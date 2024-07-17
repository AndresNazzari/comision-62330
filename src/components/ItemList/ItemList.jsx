/* eslint-disable react/prop-types */
import Item from "../Item/Item";
import styles from "./ItemList.module.scss";

const ItemList = ({ products }) => {
  return (
    <>
      <div className={styles.container}>
        {products.map((product) => {
          return <Item key={product.id} product={product} />;
        })}

        {/* <Item product={products[0]} />
        <Item product={products[1]} />
        <Item product={products[2]} /> */}
      </div>
    </>
  );
};

export default ItemList;
