import { useEffect } from "react";
import { getCountryDetail } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";




const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  // Fetch the country detail data
  useEffect(() => {
    dispatch(getCountryDetail(id));
  }, [id]);

  const countryDetail = useSelector((state) => state.country);

  // Render the country detail data
  if (countryDetail && countryDetail.length > 0) {
    const name = countryDetail[0].name;
    return (
      <div key={countryDetail[0].id}>
        <div>
          <h2>Details de {countryDetail[0].name}</h2>
        </div>
        <img src={countryDetail[0].flag} alt={countryDetail[0].name} />
        <h3>Capital: {countryDetail[0].capital}</h3>
        <h3>Continent: {countryDetail[0].continent}</h3>
        <h3>Subregion: {countryDetail[0].subregion}</h3>
        <h3>Area: {countryDetail[0].area}</h3>
        <h3>Population: {countryDetail[0].population}</h3>
      </div>
    );
  } else {
    return <div>Cargando...</div>;
  }
};

export default Detail;  