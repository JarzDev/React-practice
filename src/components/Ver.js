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
   const print =()=>{
    window.print();

   }
    useEffect( ()=> {
      getClientsById(id);
      
      // eslint-disable-next-line
  }, [] )
  return (
    <div className='container ' id='ver'>
      <div id='logo'>
      <img  src='https://smartgraphics.cl/wp-content/uploads/2021/07/logo_SGS_Sep20.png'  id='logov' />
      <h6 id='logov'>www.smartgraphics.cl</h6>
      </div>
    <div >Inicio        
    <Link to={`/show`} className="btn btn-light"><i className='fa-solid fa-house-user'></i></Link>
    <button className="btn btn-light" onClick={() => {print()}} ><i className="fa-sharp fa-solid fa-print"></i>Informe</button>
   
    <h3>Empresa:{mostrar.nombre} </h3>
    <table className='table table-dark table hover'>
      
      <thead>
      <tr>
        
        <th>Rut </th>
        <th>Direccion</th>
        <th>Telefono</th>
        <th>Fecha</th>
        
        </tr>
      </thead>
      <tbody>
       
        <tr >
          
          <td>{mostrar.rut}</td>
          <td>{mostrar.direccion}</td>
          <td>  {mostrar.telefono}</td>
          <td>  {mostrar.fecha}</td>
          
        </tr>
      </tbody>
      </table>
 
 <div id='titulos'>
    <h4 id='nombre'>Nombre  :</h4> <p className='textos'> {mostrar.equipo}. </p>  <h4 id='modelo'> Modelo  </h4>  <p className='textos'> :{mostrar.modelo} </p> <h4 id='serial'> Serie S/N:   </h4> <p className='textos'> {mostrar.serial} </p> <hr/>
     <h4 id='motivo'> Motivo del Servicio: </h4> <p> {mostrar.titulo} </p>
     </div>
     
     <div id='blockTareas'>
     <hr/>
    <h4>Tareas Realizadas</h4>
     <p>{mostrar.tareas}</p>
     <hr/>
     <h4>Partes Usadas</h4>
     <p>{mostrar.partes}</p>
      
     <hr/>
     <h4>recomendaciones</h4>
     <p>{mostrar.recomendaciones}</p>
     <hr/>
     <h4>Horas Usadas</h4>
     <p>{mostrar.horas}</p>

     </div>
     </div> 
      <hr/><br/>
   
      <div>
      <div id='tecnico'>
      <h4>Realizado Por</h4>
      <h5  >Jose Ramirez</h5>
         <p ><i className="fa-solid fa-phone"></i> +56 9 54927928<br/><i class="fa-regular fa-envelope"></i> jose@smartgraphics.cl</p>
         </div>
         
          
         <div id='contacto'>
         <h4>Contacto</h4>
         <h5 >{mostrar.contacto}</h5>
         <p ><i className="fa-solid fa-phone"></i> {mostrar.telefono }<br/><i class="fa-regular fa-envelope"></i> {mostrar.correo}</p>
         </div>
      </div>
      </div>
     )
}

export default Ver