import { useState } from "react";
import ScrollBarItem from "./ScrollBarItem";
import "./styles/scrollbar.css"

const ScrollBar = () => {
    const filtros = ["filtro 1", "filtro 2", "filtro 3", "filtro 4", "filtro 5"];

    let initialValue = "Todos"
    const [filtro, setFiltro] = useState(initialValue)

    const HandleInput = (e) =>{
        // console.log(e.target.previousSibling)
        setFiltro(e.target.value)
        let filterLabel = document.getElementsByClassName("label-filtro")
        filterLabel[0].classList.add("reset")
    }

    const HandleReset = (e) =>{
        setFiltro(initialValue)
        let filterLabel = document.getElementsByClassName("label-filtro")
        filterLabel[0].classList.remove("reset")
        let input = document.getElementsByTagName("input")
        for (const key in input) {
            if(input[key].checked){
                // console.log(input[key])
                input[key].checked = false
            }
        }
        
    } 

    return (
        <div className="scrollbar">
            <div className="wrapper">
                <div className="label-filtro">
                    <p className="content" onClick={HandleReset}>
                        {filtro}
                    </p>
                </div>
                {filtros.map((el, index) =>(
                    <ScrollBarItem key={index} id={index} filtro={el[0].toUpperCase() + el.slice(1)} handleInput={HandleInput}/>
                ))}
            </div>
            
        </div>
    )
}

export default ScrollBar