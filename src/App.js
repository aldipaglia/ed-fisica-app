const a = [
  "la pelota",
  "la corporeidad",
  "el partido",
  "el material",
  "la directora",
  "las condiciones",
];
const b = [
  "torneo",
  "alumno",
  "deporte",
  "pelota",
  "bebida",
  "reglamento",
  "clase",
];
const c = ["la cancha", "el patio", "el club", "el campo", "el aula"];
const d = [
  "mas compleja de lo que parece",
  "un tema",
  "imposible de desarrollar para el alumno",
  "l",
];

function App() {
  const pickRandomFrom = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const getContent = () =>
    `La actividad no puede realizarse porque ${pickRandomFrom(
      a
    )} del ${pickRandomFrom(b)} en ${pickRandomFrom(c)} es ${pickRandomFrom(
      d
    )}`;

  const daleGato = () =>
    "Ortiva, nos haces quedar mal a todos. Toca el otro boton, si te encanta.";

  return (
    <div className="landing">
      <div className="contenedor">
        <div className="text">
          <h4>BUENOS DIAS, PROFE.</h4>
          <p>Llegaste a la escuela, esta nublado, hay pocos pibes...</p>
          <p>Todos vimos tus intenciones, pichón. </p>
          <p>No te hagas el master profe, que somos pocos,</p>
          <p> y nos conocemos mucho.</p>
          <p>Dale, toca el boton y te tiro una excusa para no laburar</p>
        </div>

        <div className="boton">
          <button
            className="button"
            onClick={() => {
              document.getElementById("content").innerHTML = getContent();
            }}
          >
            A vender humooo
          </button>
          <button
            className="button"
            onClick={() => {
              document.getElementById("text").innerHTML = daleGato();
            }}
          >
            Voy a buscar los materiales
          </button>
        </div>
        <p className="text" id="text"></p>
        <p className="content" id="content"></p>
      </div>
    </div>
  );
}

export default App;
