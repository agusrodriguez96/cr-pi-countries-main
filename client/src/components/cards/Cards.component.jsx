import Card from "../Card/Card.component.jsx"
import styles from "./Cards.module.css"




const Cards = ({allCountries}) =>{
    const countries = allCountries;
    return (
        <div className={styles.cardsContainer}>
            {countries?.map(({id, name, flag, continent}) => 
            <Card 
            key={id}
            id={id}
            name= {name}
            flag={flag}
            continent={continent}
            />
            )}
        </div>
    )
}

export default Cards;