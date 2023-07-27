import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import{collection, doc, getDocs, deleteDoc} from 'firebase/firestore'
import appFirebase, {db} from '../firebaseConfig/firebase'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {useNavigate} from 'react-router-dom'
import Create from './Create';





const mySwal = withReactContent(Swal);
const Show = () => {
  const navigate = useNavigate();
//1 estados
const [clients, setClients] = useState( [] )
//2 base de datos
const clientsCollection = collection(db, "clientes")
//3 Funcion mostar info
const getClients = async () => {
  
    const data = await getDocs(clientsCollection);
     setClients (
        data.docs.map( (doc) => ({...doc.data(), id:doc.id}))
         );
         console.table(clients);
    }

//4 funcion delete
const deleteClient = async (id) => {
  const clientDoc =  doc(db, "clientes", id);
  await deleteDoc(clientDoc)
  getClients();


}    


const confirmDelete = (id) =>{
  Swal.fire({
    title: 'Esta Seguro de borrarlo?',
    text: "Se perderan todos los datos",
    icon: 'warning',
    // showCancelButton: true,
    // confirmButtonText:'No, me dio susto',
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sip, Borralo!'
  }).then((result) => {
    if (result.isConfirmed) {
      deleteClient(id);
      Swal.fire(
        'Borrado!',
        
        
      )
    }
  })
  }

 
//pintar

useEffect( ()=> {
    getClients();
    // eslint-disable-next-line
}, [] )
  return (
   <>
  <Create></Create>

    <div className='container'>
    <div className='row'>
    <div className='col'>
    <div className='d-grid gap-4'>
       {/* <Link to="/create" className='btn btn-secondary mt-2 mb-2'>Crear</Link> */}
    </div>
      <table className='table table-dark table hover'>
      <thead>
      <tr>
        <th>Nombre </th>
        <th>Fecha </th>
        <th>Equipo </th>
        <th>Acciones</th>
        </tr>
      </thead>

      <tbody>
        {clients.map((client)=> (
        <tr key={clients.id}>
          <td>{client.nombre}</td>
          <td>{client.fecha}</td>
          <td>{client.equipo}</td>
          <td> 
         <Link to={`/ver/${client.id}`} className="btn btn-light"><i className='fa-regular fa-eye'></i></Link>
         <button hidden onClick={() => {confirmDelete(client.id)}} className="btn btn-danger"><i className='fa-solid fa-trash'></i></button>
      

          </td>
        </tr>
        


        ) )}
      </tbody>
      </table>


    </div>
</div>
</div>
</>
  )
}

export default Show