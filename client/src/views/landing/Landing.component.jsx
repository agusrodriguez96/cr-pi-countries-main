import { NavLink } from "react-router-dom"
import styles from "./Landing.module.css"

function Landing () {
    return (

      <nav>
        <div>
        <button className={styles.buttonContainer}>
          <NavLink to="/home" className={styles.buttonText}>Ingresar</NavLink>
        </button>
        </div>
      </nav>
    )
  };

  export default Landing