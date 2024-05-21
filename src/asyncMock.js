const products = [
  {
    id: 1,
    name: "Sutura Mecanica Endoscopica",
    category: "SuturasMecanicas",
    stock: "30",
    img: "https://capitalimplants.com.ar/wp-content/uploads/2019/07/EasyEndo-Flex-producto2.jpg",
    description: "Sutura Universal Endoscopica",
    price:4000,
  },
  {
    id: 2,
    name: "Stent Coronario",
    category: "Cardiologia",
    stock: 10,
    img: "https://capitalimplants.com.ar/wp-content/uploads/2021/01/orsiro26243_549x549-300x300.jpg",
    description: "Stent Liberador de Droga Coronario",
    price:1600,
  },
  {
    id: 3,
    name: "Implante Mamario Impleo Gel",
    category: "CirugiaPlastica",
    stock: 0,
    img: "https://capitalimplants.com.ar/wp-content/uploads/2019/12/Impleo.png",
    description: "Implante Mamario de Gel Cohesivo",
    price:980,
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
