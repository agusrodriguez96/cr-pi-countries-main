import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Cards from "../../components/Cards/Cards.component";
import { getAllCountries } from "../../redux/actions/actions";
import NavBar from "../../components/NavBar/NavBar.component";
import Filters from "../../components/filters/Filters.component";
import Paginado from "../../components/paginado/Paginado.component";
import { Link } from "react-router-dom";
import style from "./Home.module.css"

const Home = () => {
    const dispatch = useDispatch();
    const allSelectedCountries = useSelector((state) => state.countries);
    const [page, setPage] = useState(1);
    const [input, setInput] = useState(1);
    const maxCountries = 10;
    const max = Math.ceil(allSelectedCountries ? allSelectedCountries.length / maxCountries : 1);
  
    useEffect(() => {
      dispatch(getAllCountries());
    }, [dispatch]);
  
    const paginatedCountries = allSelectedCountries.slice(
      (input - 1) * maxCountries,
      input * maxCountries
    );
  
    const handleFilter = () => {
      setPage(1); // Establecer la página en 1
      setInput(1); // Establecer la página actual en 1
    };
  
    return (
      <div className={style.overlay}>
        
        <NavBar />
        <Filters setPage={setPage} setInput={setInput} handleFilter={handleFilter} />
        <Paginado
          page={page}
          setPage={setPage}
          input={input}
          setInput={setInput}
          max={max}
        />
        <Cards allCountries={paginatedCountries} />
      </div>
    );
  };
  
  export default Home;