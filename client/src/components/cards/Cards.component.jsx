import Card from "../Card/Card.component.jsx"

const Cards = ({allCountries}) =>{
    const countries = allCountries;
    return (
        <div>
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