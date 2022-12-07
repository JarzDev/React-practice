import React,  {useState, useEffect}from 'react'
import {db} from '../firebaseConfig/firebase'
import{ getDoc, doc} from 'firebase/firestore'
import {useNavigate, useParams} from 'react-router-dom'
import { Link } from 'react-router-dom';
import './Ver.css'

 // eslint-disable-next-line

const Ver = () => {
 
  const [mostrar, setMostrar] =useState ('');
  const navigate = useNavigate();
const {id} =useParams();

    const getClientsById = async(id)=>{
      var data = await getDoc(doc(db,"clientes",id))
      console.log(data.data())
      setMostrar(data.data())
    }  

    useEffect( ()=> {
      getClientsById(id);
      
      // eslint-disable-next-line
  }, [] )
  return (
    <div className='container ' id='ver'>
      <div id='logo'>
      <img  src='https://smartgraphics.cl/wp-content/uploads/2021/07/logo_SGS_Sep20.png'  id='logo'/>
      </div>
    <div >Inicio        
    <Link to={`/`} className="btn btn-light"><i className='fa-solid fa-house-user'></i></Link>
     
   
    <h1></h1>
    <h1>Empresa:{mostrar.nombre}  </h1>
    <table className='table table-dark table hover'>
      
      <thead>
      <tr>
        <th>Nombre </th>
        <th>Rut </th>
        <th>Direccion</th>
        <th>Telefono</th>
        <th>Fecha</th>
        </tr>
      </thead>
      <tbody>
       
        <tr >
          <td>{mostrar.nombre}</td>
          <td>{mostrar.rut}</td>
          <td>{mostrar.direccion}</td>
          <td>  {mostrar.telefono}</td>
          <td>  {mostrar.fecha}</td>
        </tr>
      </tbody>
      </table>
 <hr/>
 <div id='titulos'>
    <h4 id='nombre'>Nombre  :</h4> <p className='textos'> {mostrar.equipo}. </p>  <h4 id='modelo'> Modelo  </h4>  <p className='textos'> :{mostrar.modelo} </p> <h4 id='serial'> Serie S/N:   </h4> <p className='textos'> {mostrar.serial} </p> <hr/>
     <h4 id='motivo'> Motivo del Servicio: </h4> <p> {mostrar.titulo} </p>
     </div>
     
     <div id='blockTareas'>

     <p>{mostrar.tareas}</p>
     <hr/>
     <h2>{mostrar.partes}</h2>
     <br/><br/>
     <p>{mostrar.recomendaciones}</p>
     </div>
     </div>
     <hr/><hr/><br/>
<h3>{mostrar.contacto}</h3>
<p><i className="fa-solid fa-phone"></i> {mostrar.telefono }<br/><i className="fa-light fa-mailbox"></i>{mostrar.correo}</p>
    </div>
    
     )
}

export default Ver