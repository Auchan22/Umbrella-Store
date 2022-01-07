import { useState } from "react";
import Layout from "../components/Layout";
import ProductList from "../components/ProductList";
import ScrollBar from "../components/ScrollBar";
import "./styles.css";

const PageHome = () => {
  const [category, setCategory] = useState("Todos");

  // Funcion que se encarga de tomar el filtro elegido en ScrollBar, y pasarlo a la lista de productos, para luego poder renderizar los productos acorde a ese filtro
  const handleFiltro = (filter) => {
    setCategory(filter);
  };
  // console.log(category);

  return (
    <>
      <Layout>
        <ScrollBar handleFiltro={handleFiltro} />
        <ProductList category={category} />
      </Layout>
    </>
  );
};

export default PageHome;
