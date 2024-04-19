import React, { useState } from 'react'
import { agregarMascota } from '../../services/mascotaService'
import { useForm } from 'react-hook-form';
import Swal from "sweetalert2";
import { Navigate } from 'react-router-dom';
import './agregar.css';

const Agregar = () => {

    const [goToHome, setGoToHome] = useState(false);
    const imagen = "https://img.freepik.com/vector-premium/avatar-cabeza-perros-linda-cara-adorable-perrito-retrato-canino-cachorro-beagle-lopeared-cachorros-encantadores-hocico-bozal-animales-ilustracion-vector-plano-mascota-encantadora-aislada-sobre-fondo-blanco_633472-883.jpg?w=360"
    
    const {handleSubmit, register} = useForm();
    
    const onSubmit = (data) => {
        try {
            agregarMascota(data);
            Swal.fire({
                title: "Has guardo los datos de la mascota con ¡Exito!",
                width: 600,
                padding: "3em",
                color: "#716add",
                background: "#fff url(https://giphy.com/embed/VRyiBxgvy9H3y)",
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("/images/nyan-cat.gif")
                  left top
                  no-repeat
                `
            } );
            setGoToHome(true)
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Algo sucedió, no se pudo agregar!",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
        } 
         
    }


    return (
        <div className='container'>
            {(goToHome == true) ? <Navigate to={"/"} /> : ""}
            <div className='content'>
                <div className="col-lg-4 ">
                    <img src={imagen} alt="logo_perrito" />
                    <hr />

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label>Nombre</label>
                                <input type="text" {...register('name')} className="fw-normal" required/>
                            </div>
                            <div>
                                <label>Dueño</label>
                                <input type="text" {...register('padre')} className="fw-normal" required/>
                            </div>
                            <div>
                                <label>Edad</label>
                                <input type="text" {...register('edad')} className="fw-normal" />
                            </div>
                            <div>
                                <label>Teléfono</label>
                                <input type="text" {...register('telefono')} className="fw-normal" required/>
                            </div>
                            <div>
                                <label>Raza</label>
                                <input type="text" {...register('raza')} className="fw-normal" />
                            </div>
                            <div>
                                <label>Dirección</label>
                                <input type="text" {...register('direccion')} className="fw-normal" required/>
                            </div>
                            <hr />
                            <button className="btn btn-primary" type="submit" >Guardar datos</button>
                       
                        </form>

                </div>
            </div>
        </div>


    )
}

export default Agregar
