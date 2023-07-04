import { GET_ALL_COUNTRIES, GET_COUNTRIES_BY_NAME, GET_COUNTRY_DETAIL, SORT_BY_ALPHABET, SORT_BY_POPULATION, FILTER_BY_CONTINENT, FILTER_BY_ACTIVITIES, CREATE_ACTIVITY_FORM } from "./action-types";
import axios from "axios"

export const getAllCountries = () => {
    return async function (dispatch) {
        const countriesApi = await axios.get("http://localhost:3001/countries")
        const countries = countriesApi.data.map((country) => {

            return {
                id: country.id,
                name: country.name,
                flag: country.flag,
                continent: country.continent,
                capital: country.capital,
                subregion: country.subregion,
                area: country.area,
                population: country.population,
                activities: country.Activities
            }
        })
     dispatch ({
        type: GET_ALL_COUNTRIES,
        payload: countries
    })   
}
};

export const getCountryByName = (name) => { 
    return async function (dispatch){
        const countryByName = await axios.get(`http://localhost:3001/countries/name?name=${name}`)
        const country = countryByName.data
        dispatch({
            type: GET_COUNTRIES_BY_NAME, 
            payload: country})
    }
}

export const getCountryDetail = (id) => {
  return async function (dispatch){
    const countryDetail = await axios.get(`http://localhost:3001/countries/${id}`);
    const country = countryDetail.data
    dispatch ({
        type: GET_COUNTRY_DETAIL,
        payload: country
    })
  }
}


export const filterByContinent = (continent) => {
    return function (dispatch){
        dispatch ({
            type: FILTER_BY_CONTINENT,
            payload: continent
        })
    } 
}


export const sortByAlphabet = (order) => {
    return function (dispatch) {
        dispatch ({
            type: SORT_BY_ALPHABET,
            payload: order
        })
    }
}

export const sortByPopulation = (order) => {
    return function (dispatch) {
        dispatch ({
            type: SORT_BY_POPULATION,
            payload: order
        })
    }
}


export const filterByActivities = (activity) => {
    return function (dispatch) {
        dispatch ({
            type: FILTER_BY_ACTIVITIES,
            payload: activity
        })
    }
}

export function postActivity(activity) {
    return async (dispatch) => {
        await axios.post("http://localhost:3001/activities", activity).then(result =>{
            return dispatch({
                type: CREATE_ACTIVITY_FORM,
                payload: result
            })
        })
    }
} ; 