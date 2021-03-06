const PRODUCTS = [
  {
    id: 1,
    productName: "Aitana",
    category: "bodys",
    productImg: [],
    price: "1.100,00"
  },
  {
    id: 2,
    productName: "Amy",
    category: "conjuntos",
    productImg: [],
    price: "1.200,00"
  },
  {
    id: 3,
    productName: "Cicilia",
    category: "conjuntos",
    productImg: [],
    price: "1.400,00"
  },
  {
    id: 4,
    productName: "Esmeralda",
    category: "conjuntos",
    productImg: [],
    price: "1.200,00"
  },
  {
    id: 5,
    productName: "Isis",
    category: "conjuntos",
    productImg: [],
    price: "1.200,00"
  },
  {
    id: 6,
    productName: "Kiki",
    category: "conjuntos",
    productImg: [],
    price: "1.000,00"
  },
  {
    id: 7,
    productName: "Marilyn",
    category: "conjuntos",
    productImg: [],
    price: "1.000,00"
  },
  {
    id: 8,
    productName: "Rose",
    category: "conjuntos",
    productImg: [],
    price: "950,00"
  },
  {
    id: 9,
    productName: "Sara",
    category: "conjuntos",
    productImg: [],
    price: "1.200,00"
  },
  {
    id: 10,
    productName: "Vintage",
    category: "conjuntos",
    productImg: [],
    price: "950,00"
  },
  {
    id: 11,
    productName: "Anastacia",
    category: "corset",
    productImg: [],
    price: "1.300,00"
  },
  {
    id: 12,
    productName: "Bombi con Liguero",
    category: "bombi liguero",
    productImg: [],
    price: "700,00"
  },
  {
    id: 13,
    productName: "Pack x3 bombis",
    category: "bombachas",
    productImg: [],
    price: "700,00"
  },
  {
    id: 14,
    productName: "Set x3",
    category: "sets",
    productImg: [],
    price: "650,00"
  },
  {
    id: 15,
    productName: "Set Isabella",
    category: "sets",
    productImg: [],
    price: "1.600,00"
  },
  {
    id: 16,
    productName: "Tina",
    category: "Conjunto con Aro",
    productImg: [],
    price: "1.200,00"
  },
  {
    id: 17,
    productName: "Top Catalina",
    category: "tops",
    productImg: [],
    price: "800,00"
  },
  {
    id: 18,
    productName: "Top Lisboa",
    category: "tops",
    productImg: [],
    price: "700,00"
  }
];

//Funcion que se encarga de filtrar los productos por medio de la categoria que se recibe por parametros.
const filterProductByCategory = (cat) => {
  // console.log(PRODUCTS);
  return PRODUCTS.filter(
    (product) => product.category.toLowerCase() === cat.toLowerCase()
  );
  // Devuelve los productos que coinciden con la categoria
};

// Funcion que se encarga de encontrar el primer elemento en el array de Productos con el id coincidente.
const getProductById = (id) => {
  // console.log(PRODUCTS);
  return PRODUCTS.find((product) => product.id === id());
  // Devuelve el producto que coincide con el id ingresado
};

// Se encarga de armar un Array con todos los filtros. El Set se ocupa que no haya ningun elemento repetido
let categories = [...new Set(PRODUCTS.map((el) => el.category))];

export { PRODUCTS, filterProductByCategory, getProductById, categories };
