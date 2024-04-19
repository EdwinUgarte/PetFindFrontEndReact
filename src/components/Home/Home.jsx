import React, { useEffect, useState } from "react";
import { deleteMascota, eliminar, getMascotas } from '../../services/mascotaService'
import { Link, Navigate } from "react-router-dom";
import './Home.css';


function Home() {
  const [mascotas, setMascotas] = useState(null);

  useEffect(() => {
    getMascotas(setMascotas);
  }, []);


 


  return (

    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Dueño</th>
            <th scope="col">Raza</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody >
          {(mascotas != null) ? mascotas.map((mascota, i) => (

            <tr key={mascota._id}>
              <th scope="col">{(i + 1)}</th>
              <th scope="col">{mascota.name.toUpperCase()}</th>
              <th scope="col">{mascota.padre.toUpperCase()}</th>
              <th scope="col">{mascota.raza.toUpperCase()}</th>
              <th><Link to={`/perfil/${mascota._id}`}><button className="btn btn-primary">Ver más</button></Link></th>
              <th><button className="btn btn-danger" onClick={(x) => eliminar(mascota._id, x)}>Eliminar</button></th>
            </tr>

          )) :
            <div className="spin">
              <div className="spinner-border" role="status" />
              <p>Cargando...</p>
            </div>
          }
        </tbody>
      </table>
    </>
  );

}
export default Home;
