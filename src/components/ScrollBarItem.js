const ScrollBarItem = ({id ,filtro, handleInput}) => {

    return (
        <>
            <input type="radio" name="s" id={`s${id}`} value={filtro} onClick={handleInput}/>
            <label className="content-filter" htmlFor={`s${id}`}>{filtro}</label>
        </>
        
    )
}

export default ScrollBarItem
