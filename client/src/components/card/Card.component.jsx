import style from "./Card.module.css";
import { NavLink } from "react-router-dom";


const Card = ({ id, name, flag, continent }) => {
    return (
        <NavLink to={`/detail/${id}`} className= {style.navLink}>
        <div className={style.container}>
            <h2> {name} </h2>
            <img src={flag} className={style.img} />
           
            <h3> {continent} </h3>
        </div>
    </NavLink>
    )
}

export default Card;