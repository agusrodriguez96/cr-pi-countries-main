import React from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries, getCountryByName } from "../../redux/actions/actions";


const SearchBar =() => {
    const [searchCountry, setSearchCountry] = useState(""); // aqui tengo mi estado local, y una funcion que modifica mi estado
    const dispatch = useDispatch(); // hago refencia al useDispatch en toda la funcion SearchBar con const dispatch

    const handleChange= (event) => { // handleChange es un manejador de cambios
        if(event.target.value === "") { // este condicional nos dice que si lo q envia el usuario es un string vacio se despacha una action getAllCountries q trae todos los paises 
            dispatch(getAllCountries());
        }
        setSearchCountry(event.target.value); // setSearchCountry cambia el estado con lo q le pasemos por parametro 
    }

    const handleSearch = () => { // el manejador handelSearch de busqueda donde despacha la action getCountryByName que tiene como param mi estado local searchCountry 
     dispatch(getCountryByName(searchCountry))
    }

    const handleOnSubmit = (event) => { // el manejador handleOnSubmit se usa cuando se hace un click para enviar algo
     event.preventDefault(); //event.preventDefault evita que el usuario pierda la info cuando ejecuta el onSubmit hasta q cambie de ruta
     if(searchCountry.length > 0){ // en este condicional decimos que si mi estado local searchCountry es mayor q cero se ejecuta mi handleSearch, es decir q si mi estado local posee algo se realiza la busqueda
        handleSearch()
     }
    }
    return(
        <div>
            <form onSubmit={handleOnSubmit}>
                <input className="inputSearchBar"
                    placerholder="Search..."
                    value={searchCountry}
                    onChange={handleChange}
                />
                <div>
                    <button type="submit">Submit</button>
                </div>
           </form>
        </div>
    )
}

export default SearchBar