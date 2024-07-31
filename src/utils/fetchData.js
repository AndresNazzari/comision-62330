/* eslint-disable no-unused-vars */
import { items } from "../mock/mockData";

// export function getProducts() { }

export const getProducts = (category) => {

  let filteredItems = [...items]

  if (category) {
    filteredItems = items.filter((item) =>
      item.category.includes(category)
    );
  }

  return new Promise((resolve, reject) => {
    if (items.length > 0) {
      setTimeout(() => {
        resolve(filteredItems);
      }, 2000);
    } else {
      reject("No hay productos disponibles");
    }
  });
};

export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    const product = items.find((item) => item.id === parseInt(id));
    setTimeout(() => {
      if (product) {
          resolve(product);
      } else {
        reject("No se encontro el producto");
      }
    }, 1000);
  });
}


export const getCategories = () => {
  return fetch("https://fakestoreapi.com/products/categories").then((res) => {
    return res.json();
  });

  // return fetch("https://fakestoreapi.com/products/categories").then((res) => res.json())
};
