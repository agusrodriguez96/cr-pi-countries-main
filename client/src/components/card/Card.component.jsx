import style from "./Card.module.css";
import { NavLink } from "react-router-dom";


const Card = ({ id, name, flag, continent }) => {
    return (
        <div className={style.container}>
            <NavLink to={`/detail/${id}`} ><h2> {name} </h2></NavLink>
            <img src={flag} />
            <h2> {continent} </h2>
        </div>
    )
}

export default Card;