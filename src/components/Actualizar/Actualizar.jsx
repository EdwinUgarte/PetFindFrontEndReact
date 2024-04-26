import { useEffect, useState } from "react"
import { Navigate, useParams } from "react-router-dom";
import { findById, updateMascota } from "../../services/mascotaService";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import './actualizar.css'

function Actualizar() {
    const [mascota, setMascota] = useState(null);
    const [goToHome, setGoToHome] = useState(false);

    const params = useParams();
    const imagen = "https://img.freepik.com/vector-premium/avatar-cabeza-perros-linda-cara-adorable-perrito-retrato-canino-cachorro-beagle-lopeared-cachorros-encantadores-hocico-bozal-animales-ilustracion-vector-plano-mascota-encantadora-aislada-sobre-fondo-blanco_633472-883.jpg?w=360"

    const { register, handleSubmit} = useForm();

   

    useEffect(() => {
        findById(setMascota, params.id)
    }, []);


    const onSubmit = (data) => {

            try {             
                updateMascota(data, mascota._id);
                Swal.fire({
                    title: "Has actualizado los datos de la mascota con ¡Exito!",
                    width: 600,
                    padding: "3em",
                    color: "#716add",
                    background: "#fff url(/images/trees.png)",
                    backdrop: `
                      rgba(0,0,123,0.4)
                      url("/images/nyan-cat.gif")
                      left top
                      no-repeat
                    `
                } );
    
                setGoToHome(true);
        
            } catch (error) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Algo sucedió, no se pudo actualizar!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                  });
            }    
    }



    return (

        <div className='container'>
            {(goToHome == true) ? <Navigate to={"/"}/> : "" }
            <div className='content'>
                <div className="col-lg-4 ">
                    <img src={imagen} alt="logo_perrito" />
                    <hr />
                    {(mascota === null) ? "No existe esa mascotita" : (

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label>Nombre</label>
                                <input type="text" {...register('name')} className="fw-normal"  defaultValue={mascota.name}/>
                            </div>
                            <div>
                                <label>Dueño</label>
                                <input type="text" {...register('padre')} className="fw-normal" defaultValue={mascota.padre} />
                            </div>
                            <div>
                                <label>Edad</label>
                                <input type="text" {...register('edad')} className="fw-normal" defaultValue={mascota.edad}/>
                            </div>
                            <div>
                                <label>Teléfono</label>
                                <input type="text" {...register('telefono')} className="fw-normal" defaultValue={mascota.telefono}/>
                            </div>
                            <div>
                                <label>Raza</label>
                                <input type="text" {...register('raza')} className="fw-normal" defaultValue={mascota.raza}/>
                            </div>
                            <div>
                                <label>Dirección</label>
                                <input type="text" {...register('direccion')} className="fw-normal" defaultValue={mascota.direccion}/>
                            </div>
                            <hr />
                            <button className="btn btn-primary" type="submit" >Actualizar datos</button>
                    
                        </form>

                    )}

                </div>
            </div>
        </div>

    )
}

export default Actualizar