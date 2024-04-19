import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link para enlaces internos de React Router

const Home = () => {
  const currentDate = new Date().toLocaleDateString();
  const nombre = "Rodrigo y Marco";
  const materia = "Programación Avanzada";
  const numeroParcial = "2";

  return (
    <div>
      <h2>Home</h2>
      <p>Nombre: {nombre}</p>
      <p>Fecha: {currentDate}</p>
      <p>Materia: {materia}</p>
      <p>Número de parcial: {numeroParcial}</p>
      <Link to="/profile"> {/* Utiliza Link para crear un enlace interno a la ruta del perfil ("/profile") */}
        <button>Ir al Perfil</button>
      </Link>
    </div>
  );
};

export default Home;
