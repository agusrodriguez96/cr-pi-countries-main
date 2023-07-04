
export function validate(data) {
  const errors = {};

  if (!data.name.trim() || !/^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$/.test(data.name) ||  data.name.length < 2) {
      errors.name = 'El nombre no debe contener caracteres especiales y debe tener más de dos caracteres.';
  }

  if (!data.difficulty) {
      errors.difficulty = 'Debes seleccionar un nivel de dificultad.';
  }

  if (!data.season.trim()) {
      errors.season = 'Debes seleccionar alguna estación del año.';
  }

  if (data.countries.length < 1) {
      errors.countries = 'Debes seleccionar al menos un país.';
  }

  return errors;
}

// validate 
// const validate = ({form, setErrors, name, difficulty, duration, season }) => {
//   if(!/^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$/.test(form.name)) {    // para nombre de la actividad
//     setErrors ({
//         ...errors,
//         name: "No se permiten caracteres especiales"
//     })
//   } else setErrors ({
//      ...errors,
//      name: ""
//   });


//   if(!difficulty){                                        // para seleccionar el nivel de dificultad
//     setErrors ({
//       ...errors,
//       difficulty: "Selecciona el nivel de dificultad"
//     })                
// };
//   if(!duration) {
//     setErrors ({
//       ...errors,
//       duration: "Indica la duración de la actividad"
//     })
//   };
//   if(!season){
//     setErrors ({
//       ...errors,
//       season: "Selecciona una estación del año"
//     })
//   };

// }

// export default validate