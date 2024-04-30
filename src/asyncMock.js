const products = [
  {
    id: 1,
    name: "nombre Mock producto 1",
    category: "Cat1",
    stock: 30,
    img: "",
    description: "Product 1 descripcion",
  },
  {
    id: 2,
    name: "nombre Mock producto 2",
    category: "Cat2",
    stock: 10,
    img: "",
    description: "Product 2 descripcion",
  },
  {
    id: 3,
    name: "nombre Mock producto 1",
    category: "Cat3",
    stock: 0,
    img: "",
    description: "Product 3 descripcion",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (productID) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productID));
    }, 500);
  });
};
