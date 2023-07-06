import React from 'react'
import SearchBar from '../searchBar/SearchBar.component'
import style from "./NavBar.module.css"
import { Link } from 'react-router-dom'




function NavBar() {
  return (
    <div className={style.container}>
      <div>
        <div>
      <Link to= "/create">
        <button className={style.buttonCrear}>Crear actividad</button>
        </Link>
        </div>
        <SearchBar/>
      </div>
    </div>
  )
}

export default NavBar