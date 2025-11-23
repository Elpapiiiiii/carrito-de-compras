const products = [
  {
    id: "1",
    title: "Notebook Gamer El Papi",
    description: "Ryzen 7, 16GB RAM, RTX 4060",
    price: 1500000,
    stock: 8,
    category: "notebooks",
    image:
      "https://res.cloudinary.com/dtjy3wi14/image/upload/v1763935502/jakarta-indonesia-tuesday-3-march-260nw-1665012841_nvw2jw.webp"
  },
  {
    id: "2",
    title: "Mouse Gamer RGB",
    description: "Mouse óptico 7200 DPI",
    price: 35000,
    stock: 20,
    category: "perifericos",
    image:
      "https://res.cloudinary.com/dtjy3wi14/image/upload/v1763935553/919481-MLA52852663764_122022-F_faruv2.jpg"
  },
  {
    id: "3",
    title: "Teclado Mecánico",
    description: "Switches rojos",
    price: 80000,
    stock: 15,
    category: "perifericos",
    image:
      "https://res.cloudinary.com/dtjy3wi14/image/upload/v1763935604/nb_TECLADO-GAMER-RAZER-HUNTSMAN-MINI-SW-ANALOG_ver_0199451ceb774fe539867fd9a2276f00_wisv6g.jpg"
  },
  {
    id: "4",
    title: "El Papi Phone",
    description: "Pantalla AMOLED",
    price: 600000,
    stock: 5,
    category: "celulares",
    image:
      "https://res.cloudinary.com/dtjy3wi14/image/upload/v1763935647/Nokia-3310-2000_xsayip.webp"
  }
];

// 🔹 Promesa para traer TODOS los productos
export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000); // 1 segundo para simular fetch
  });
};

// 🔹 Promesa para traer UN producto por ID
export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((prod) => prod.id === id);
      if (product) {
        resolve(product);
      } else {
        reject("Producto no encontrado");
      }
    }, 1000);
  });
};

export default products;
