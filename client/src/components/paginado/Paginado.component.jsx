import style from "./Paginado.module.css"

const Paginado = ({ page, setPage, input, setInput, max }) => {
    const nextPage = () => {
        if (input + 1 <= max) {
            setInput(input + 1)
            setPage(page + 1)
        }
    }

    const prevPage = () => {
        if (input - 1 >= 1) {
            setInput(input - 1)
            setPage(page - 1)
        }
    }

    const handlePagination = (event) => {
        const selectedPage = Number(event.target.value);
        if (selectedPage <= max && selectedPage >= 1) {
          setPage(selectedPage);
          setCurrentPage(selectedPage);
        } else {
          alert(`No existen mas páginas.`);
        }
      };

    return (
        <div>
            <div className={style.container}>
                {input === 1 ?
                    <span></span> : <button onClick={prevPage} className={style.buttonBack}>«</button>
                }
                <div className={style.div}></div>
                <div className={style}></div>   
                <input max={max} min='1' name="pag" autoComplete="off" value={input} onChange={(e) => handlePagination(e)} className={style.input}/>
                <div className={style.div}></div>
                <button className={style.buttonMax}>{max}</button>
                <div className={style.div}></div>
                {input === max ?

                    <div className={style.div}></div>
                    :
                    <button  onClick={nextPage} className={style.buttonNext} >»</button>

                }
            </div>
        </div>
    )
}



export default Paginado