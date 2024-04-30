const products = [
  {
    id: 1,
    name: "nombre Mock producto 1",
    category: "Celulares",
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

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};

export const getProductsByCategory = (productCategory) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.category === productCategory));
    }, 500);
  });
};
