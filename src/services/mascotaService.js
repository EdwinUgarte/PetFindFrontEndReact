import axios from "axios";
import Swal from "sweetalert2";
const endPoint = "https://backend-petfind.onrender.com/api/pets";


const getMascotas = async(state) => {
    const respuesta = await axios.get(endPoint);
    state(respuesta.data.mascotas);
   
  };

const findById = async(state, id) => {
    const respuesta = await axios.get(`${endPoint}/${id}`);
    state(respuesta.data.mascota);
}

const agregarMascota = async(mascota) => {
    const respuesta = await axios.post(endPoint, mascota);
    console.log(respuesta)
}


const updateMascota = async(mascota, id) => {
    try {
        const respuesta = await axios.put(`${endPoint}/${id}`, mascota);
        console.log("Se actualizo con exito" , respuesta);
        
    } catch (error) {
        console.error("Error al actualizar", error);
    }
}

const deleteMascota = async(id) => {
    try {
        const respuesta = await axios.delete(`${endPoint}/${id}`);
        console.log(respuesta)
    } catch (error) {
        console.log(error)
    }
}

const eliminar = (id) => {
    Swal.fire({
      title: "¿Estas seguro?",
      text: "¡No podras recuperar esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Sí, eliminar!"
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMascota(id);
        Swal.fire({
          title: "Eliminado!",
          text: "La mascota ha sido eliminada con exito",
          icon: "success",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          confirmButtonText: "¡Ok",
          showCancelButton: false,
        }).then((result) => {
          if(result.isConfirmed){location.href = "/"}
        });

      }
    });
  }


  export{
    getMascotas,
    findById,
    agregarMascota,
    updateMascota,
    deleteMascota,
    eliminar,
  }