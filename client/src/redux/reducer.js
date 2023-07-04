import { GET_ALL_COUNTRIES, GET_COUNTRIES_BY_NAME, GET_COUNTRY_DETAIL, FILTER_BY_CONTINENT, SORT_BY_ALPHABET, SORT_BY_POPULATION, FILTER_BY_ACTIVITIES} from "./actions/action-types";

const initialState = {
    countries: [],
    country:{},
    copyCountries: [],
    allActivities: []
}

const rootReducer = (state= initialState, {type, payload}) => {
    switch(type) {
        case GET_ALL_COUNTRIES: 
        return {
            ...state,
            countries: payload,
            copyCountries: payload,
            allActivities: payload
        }
        case GET_COUNTRIES_BY_NAME:
            return {
            ...state,
            countries: payload
            }
        case GET_COUNTRY_DETAIL:
            return {
                ...state,
                country: payload
            }
        case FILTER_BY_CONTINENT:
            if(payload){
                const filteredCountries = payload === "todos" ? state.copyCountries :state.copyCountries.filter(country => country.continent === payload)
                return{
                ...state,
                countries: filteredCountries
                }
            }
            return{
                ...state
            }
            
        case SORT_BY_POPULATION:
            const sortedByPopulation = [...state.countries].sort((a, b) => {
                if(payload === "ascendant") {
                return  a.population - b.population //ascendente
                } else {
                 return b.population - a.population // descendente
                }
            })
            return {
                ...state,
                countries: sortedByPopulation  // aqui estoy trayendo la copia del estado y los paises ya ordenados de manera asc o desc
            } 
        
        case SORT_BY_ALPHABET:
            const sortedByAlphabet = [...state.countries].sort((a, b) => {
                if(payload === "ascendant") {
                    return a.name.localeCompare(b.name) // ascendente    *el  metodo localeCompare compara las prop de un obj *
                } else {
                    return b.name.localeCompare(a.name) // descendente
                }
            })
            return {
                ...state,
                countries: sortedByAlphabet
            }

        case FILTER_BY_ACTIVITIES:
            const filteredActivities = payload === "todos" ? state.copyCountries : state.copyCountries.filter(c =>{  // c es cada country
            const mapActivities = c.activities?.map(activity => activity.name)
            if(mapActivities.includes(payload)){
                return c
            }
            })
        return {
            ...state,
            countries: filteredActivities
        }

        default: 
        return {
            ...state,
        }
    }  
}

export default rootReducer;