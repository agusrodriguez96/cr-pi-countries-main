import { NavLink } from "react-router-dom"
import styles from "./Landing.module.css"

function Landing () {
    return (

      <nav>
        <div>
          <div className={styles.overlay}>
          </div>
          <div className= {styles.title}>
          <h1>Countries</h1>
          </div>
          <div className={styles.text}>
          <h3>¿Quieres conocer detalles sobre diferentes países de todo el mundo?
              ¡Estás en el lugar adecuado! Nuestra aplicación te ofrece datos actualizados, 
              curiosidades y mas info interesante sobre cada nación.
              ¡Todo en una experiencia fácil de usar!</h3>
          </div>
        
        <button className={styles.buttonContainer}>
          <NavLink to="/home" className={styles.buttonText}>Ingresar</NavLink>
        </button>
        </div>
      </nav>
    )
  };

  export default Landing