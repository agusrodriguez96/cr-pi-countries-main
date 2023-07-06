import { useState, useEffect } from "react"
import { validate } from "./Validation"
import { Link, useNavigate } from "react-router-dom"
import { getAllCountries, postActivity } from "../../redux/actions/actions"
import { useSelector, useDispatch } from "react-redux"
import style from "./Create.module.css"


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
    ;
    //navigate('/home');
  }


  return (
     <div className={style.overlay}>

      <Link to="/home">
        <button className={style.buttonVolver}>Volver</button>
      </Link>

    <div className={style.container}>
      {showErrors && <p>{errors}</p>}
      <form onSubmit={handleSubmit}>

        <div className={style.nombreContainer}>
          <label htmlFor="name" className={style.textoName}>Nombre: </label>
          <input
            id="name"
            name="name"
            placeholder="Ingrese el nombre de la actividad"
            type="text"
            value={form.name}
            onChange={handleChange} />

        </div>

        <div className={style.dificultad}>
          <label htmlFor="difficulty"className={style.textoDificultad}>Dificultad: </label>
          <input
            id="difficulty"
            type="text"
            name="difficulty"
            placeholder="Ingrese nivel de dificultad (1 al 5)"
            value={form.difficulty}
            onChange={handleChange} />

        </div>

        <div className={style.duracion}>
          <label htmlFor="duration" className={style.textoDuracion}>Duración: </label>
          <input
            id="duration"
            name="duration"
            type="number"
            value={form.duration}
            onChange={handleChange} />

        </div>

        <div className={style.temporada}>
          <label htmlFor="season" className={style.textoTemporada}>Temporada: </label>
          <input
            id="season"
            name="season"
            type="text"
            placeholder="Ingrese temporada del año"
            value={form.season}
            onChange={handleChange} />
        </div>

        <div>
          <label className={style.textoPaises}></label>
          <select className={style.paises} placeholder="Paises" name="countries" onChange={(event) => handleSelect(event)}>
            <option className={style.optionsForm}>Elegí los paises</option>
            {paises?.map(element => {
              return (
                <option value={element.id} key={element.id} className={style.optionsForm}>{element.name}</option>
              )
            })}
          </select>
          <div className={style.contenedorColumnas}>
          {form.countries?.map(country => {
            return (
              <div key={Math.random()}>
                <div className={style.paisContainer}>
                  <button value={country} type="button" onClick={(e) => handleRemove(e)}>X</button>
                  <p>{paises.find(activityCountry => activityCountry.id === country).name}</p>
                </div>
              </div>
            )
          })}
          </div>
        </div>

        <div>
          <button className={style.buttonCrear}>Crear Actividad</button>
        </div>

      </form>

    </div>
    </div>
  )
}



export default Create


