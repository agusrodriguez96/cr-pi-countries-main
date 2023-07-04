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
            <div>
                {input === 1 ?
                    <span></span> : <button onClick={prevPage} >Back</button>
                }
                <input max={max} min='1' name="pag" autoComplete="off" value={input} onChange={(e) => handlePagination(e)} />
                <button>de {max}</button>
                {input === max ?
                    <div></div>
                    :
                    <button  onClick={nextPage} >Next</button>
                }
            </div>
        </div>
    )
}



export default Paginado