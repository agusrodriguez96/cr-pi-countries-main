import { useDispatch, useSelector } from 'react-redux'
import { filterByContinent, sortByAlphabet, sortByPopulation, filterByActivities } from '../../redux/actions/actions'
import style from "./Filters.module.css"

const Filters = ({ handleFilter }) => {
    const dispatch = useDispatch();
    const allActivities = useSelector(state => state.allActivities);
    let filteredActivities = allActivities.filter(country => {
        if (country.activities && country.activities[0] !== undefined) {
          return country.activities;
        }
      });

      let mappedActivities = filteredActivities.map(country => country.activities[0]['name']);
      let activitiesSinRepetir = mappedActivities.filter((activity,index)=>{
        return mappedActivities.indexOf(activity) === index;
      })
    const handleFilterByContinent = (continent) => {
         handleFilter()
        dispatch(filterByContinent(continent));
    };

    const handleSortByPopulation = (order) => {
        dispatch(sortByPopulation(order));
    };

    const handleSortByAlphabet = (order) => {
        dispatch(sortByAlphabet(order));
    };

    const handleFilterByActivities = (activity) => {
      handleFilter()
        dispatch(filterByActivities(activity))
    };

    return(
        <div>
           <select className={style.alfabeticamente} onChange={(e) => handleSortByAlphabet(e.target.value)}>
            <option className={style.options}>Alfabéticamente</option>
            <option value="ascendant" className={style.options}>(A - Z ↑)</option>
            <option value="descendant" className={style.options}>(Z - A ↓)</option>
          </select>
          <select className={style.poblacion} onChange={(e) => handleSortByPopulation(e.target.value)}>
            <option className={style.options}>Población</option>
            <option className={style.options} value="ascendant">Mayor población ↑</option>
            <option className={style.options} value="descendant">Menor población ↓</option>
      </select>
          <select className={style.continentes} onChange={(e) => handleFilterByContinent(e.target.value)}>
            <option className={style.options} value="todos">Continentes</option>
            <option className={style.options} value="Africa">Africa</option>
            <option className={style.options} value="Asia">Asia</option>
            <option className={style.options} value="Europe">Europe</option>
            <option className={style.options} value="Oceania">Oceania</option>
            <option className={style.options} value="Antarctica">Antártida</option>
            <option className={style.options} value="North America">North America</option>
            <option className={style.options} value="South America">South America</option>
          </select>
          <select onChange={(e)=>handleFilterByActivities(e.target.value)} className={style.actividad}> 
            <option className={style.options} >Orden por Actividad</option>
            {activitiesSinRepetir?.map(activity => {
            return(
            <option className={style.options} value={activity} key={Math.random()}>{activity}</option> 
               )
              })
            }
         </select>
        </div>
    )
};



export default Filters;