import { useDispatch, useSelector } from 'react-redux'
import { filterByContinent, sortByAlphabet, sortByPopulation, filterByActivities } from '../../redux/actions/actions'


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
           <select className="select" onChange={(e) => handleSortByAlphabet(e.target.value)}>
            <option>Alphabetically</option>
            <option value="ascendant">Ascendant ↑</option>
            <option value="descendant">Descendant ↓</option>
          </select>
          <select className="select" onChange={(e) => handleSortByPopulation(e.target.value)}>
            <option>Population</option>
            <option value="ascendant">Ascendant ↑</option>
            <option value="descendant">Descendant ↓</option>
      </select>
          <select className="select" onChange={(e) => handleFilterByContinent(e.target.value)}>
            <option value="todos">Continents</option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            <option value="Antarctica">Antarctica</option>
            <option value="North America">North America</option>
            <option value="South America">South America</option>
          </select>
          <select onChange={(e)=>handleFilterByActivities(e.target.value)}> 
            <option >Sort By Activity</option>
            {activitiesSinRepetir?.map(activity => {
            return(
            <option value={activity} key={Math.random()}>{activity}</option> 
               )
              })
            }
         </select>
        </div>
    )
};



export default Filters;