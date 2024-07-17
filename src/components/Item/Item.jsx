/* eslint-disable react/prop-types */
const Item = ({ product }) => {
  return (
    <div>
      <div>{product.name}</div>
      <div>{product.description}</div>
      <div>{product.price}</div>
      <img src={product.image} alt="" />
    </div>
  );
};

export default Item;
