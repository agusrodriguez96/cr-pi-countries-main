import { useState, useEffect } from "react"
import { validate } from "./Validation"
import { Link, useNavigate } from "react-router-dom"
import { getAllCountries, postActivity } from "../../redux/actions/actions"
import { useSelector, useDispatch } from "react-redux"

const Create = () => {

  const [form, setForm] = useState({        // estado local
    name: "",
    difficulty: 1,
    duration: 1,
    season: "",
    countries: []
  })

  const [errors, setErrors] = useState("");               // estado de errores
  const [showErrors, setShowErrors] = useState(false)     // estado auxiliar

  const paises = useSelector(state => state.countries)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })

  }

  function handleSelect(event) {
    if (form.countries.includes(event.target.value)) {
      console.log("No pueden haber dos paises iguales");
    } else {
      setForm({
        ...form,
        countries: [...form.countries, event.target.value],
      })
    };
  }


  function handleRemove(event) {
    setForm({
      ...form,
      countries: form.countries.filter(country => (country !== event.target.value))
    });
  }


  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validate(form)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(Object.values(validationErrors)[0]);
      setShowErrors(true);
      return;
    }

    dispatch(postActivity(form));
    setForm({
      name: "",
      difficulty: 1,
      duration: "",
      season: "",
      countries: [],
    });
    alert("Actividad");
    navigate('/home');
  }


  return (
    <div>
      <Link to="/home">Back Home</Link>
      {showErrors && <p>{errors}</p>}
      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="name">Nombre: </label>
          <input
            id="name"
            name="name"
            placeholder="Ingrese el nombre de la actividad"
            type="text"
            value={form.name}
            onChange={handleChange} />

        </div>

        <div>
          <label htmlFor="difficulty">Dificultad: </label>
          <input
            id="difficulty"
            type="text"
            name="difficulty"
            placeholder="ingrese nivel de dificultad"
            value={form.difficulty}
            onChange={handleChange} />

        </div>

        <div>
          <label htmlFor="duration">Duración: </label>
          <input
            id="duration"
            name="duration"
            type="number"
            value={form.duration}
            onChange={handleChange} />

        </div>

        <div>
          <label htmlFor="season">Temporada: </label>
          <input
            id="season"
            name="season"
            type="text"
            placerholder="ingrese temporada"
            value={form.season}
            onChange={handleChange} />
        </div>

        <div>
          <label>Países:</label>
          <select placeholder="Paises" name="countries" onChange={(event) => handleSelect(event)}>
            <option>Elegí los paises</option>
            {paises?.map(element => {
              return (
                <option value={element.id} key={element.id}>{element.name}</option>
              )
            })}
          </select>
          {form.countries?.map(country => {
            return (
              <div key={Math.random()}>
                <div>
                  <button value={country} type="button" onClick={(e) => handleRemove(e)} >X</button>
                  <p>{paises.find(activityCountry => activityCountry.id === country).name}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div>
          <button>Crear</button>
        </div>

      </form>

    </div>
  )
}



export default Create


