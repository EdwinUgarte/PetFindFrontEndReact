import React, { useEffect, useState } from 'react';
import './perfil.css'
import { eliminar, findById } from '../../services/mascotaService';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Perfil = () => {

    const imagen = "https://img.freepik.com/vector-premium/avatar-cabeza-perros-linda-cara-adorable-perrito-retrato-canino-cachorro-beagle-lopeared-cachorros-encantadores-hocico-bozal-animales-ilustracion-vector-plano-mascota-encantadora-aislada-sobre-fondo-blanco_633472-883.jpg?w=360"
    const [mascota, setMascota] = useState(null);
    const params = useParams();

    useEffect(() => {
        findById(setMascota, params.id)
    }, []);



    return (
        <div className='container'>
            <div className='content'>
                <div className="col-lg-4 ">
                    <img src={imagen} alt="logo_perrito" />
                    <hr />
                    {(mascota === null ?
                        <div>
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div>Si la pagina no carga, posiblemente la mascota fue eliminada por un colaborador, vuelve a inicio o comunicate con soporte.</div>
                        </div>
                        : (
                            <div>
                                <p>Nombre</p>
                                <h2 className="fw-normal title">{mascota.name.toUpperCase()}</h2>
                                <p>Dueño</p>
                                <h3 className="fw-normal">{mascota.padre.toUpperCase()}</h3>
                                <p>Edad: {(mascota.edad != null ? `${mascota.edad} Años` : "No hay registro")} </p>
                                <p>Teléfono: {mascota.telefono}</p>
                                <p>Raza: {mascota.raza}</p>
                                <p>Dirección</p>
                                <p>{mascota.direccion}</p>
                                <Link to={`/update/${mascota._id}`}><button className="btn btn-primary">Actualizar datos</button></Link>
                                <hr />
                                <button className="btn btn-danger" onClick={(x) => eliminar(mascota._id, x)}>Eliminar</button>
                            </div>
                        )

                    )}
                </div>
            </div>
        </div>
    )
}

export default Perfil
