import { useState } from "react";
import ScrollBarItem from "./ScrollBarItem";
import { categories } from "../Database/Products";
import "./styles/scrollbar.css";

const ScrollBar = ({ handleFiltro }) => {
  // const filtros = ["filtro 1", "filtro 2", "filtro 3", "filtro 4", "filtro 5"];
  // console.log(Data.map(el=>(el.category)))

  let initialValue = "Todos";
  const [filtro, setFiltro] = useState(initialValue);

  const HandleInput = (e) => {
    // console.log(e.target.previousSibling)
    setFiltro(e.target.value);
    handleFiltro(e.target.value);
    let filterLabel = document.getElementsByClassName("label-filtro");
    filterLabel[0].classList.add("reset");
  };

  const HandleReset = (e) => {
    setFiltro(initialValue);
    handleFiltro(initialValue);
    let filterLabel = document.getElementsByClassName("label-filtro");
    filterLabel[0].classList.remove("reset");
    let input = document.getElementsByTagName("input");
    for (const key in input) {
      if (input[key].checked) {
        // console.log(input[key])
        input[key].checked = false;
      }
    }
  };

  return (
    <div className="scrollbar">
      <div className="wrapper">
        <div className="label-filtro">
          <span className="content" onClick={HandleReset}>
            {filtro}
          </span>
        </div>
        {categories.map((el, index) => (
          <ScrollBarItem
            key={index}
            id={index}
            filtro={el[0].toUpperCase() + el.slice(1)}
            handleInput={HandleInput}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollBar;
