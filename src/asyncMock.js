const products = [
  {
    id: 1,
    name: "Sutura Mecanica Endoscopica",
    category: "SuturasMecanicas",
    stock: "30",
    img: "",
    description: "Sutura Universal Endoscopica",
  },
  {
    id: 2,
    name: "Stent Coronario",
    category: "Cardiologia",
    stock: 10,
    img: "",
    description: "Stent Liberador de Droga Coronario",
  },
  {
    id: 3,
    name: "Implante Mamario Impleo Gel",
    category: "CirugiaPlastica",
    stock: 0,
    img: "",
    description: "Implante Mamario de Gel Cohesivo",
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
      resolve(products.filter((prod) => prod.category === productCategory));
    }, 500);
  });
};
