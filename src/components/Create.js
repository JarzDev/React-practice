import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {collection, addDoc} from 'firebase/firestore'
import {db} from '../firebaseConfig/firebase'
import {async} from '@firebase/util'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const mySwal = withReactContent(Swal);

const Create = () => {
 
    const [nombre, setNombre] = useState('');
    const [rut, setRut] = useState('');
    const [direccion, setDireccion] = useState('');
    const [contacto, setContacto] = useState('');
    const [correo, setCorreo] = useState(''); 
    const [telefono, setTelefono] = useState('');
    const [equipo, setEquipo] = useState('');
    const [modelo, setModelo] = useState('');
    const [serial, setSerial] = useState('');
    const [fecha, setFecha] = useState('');
    const [titulo, setTitulo] = useState('');
    const [tareas, setTareas] = useState('');
    const [partes, setPartes] = useState('');
    const [recomendaciones, setRecomendaciones] = useState('');
    const navigate = useNavigate();

const clientsCollection = collection(db, "clientes");

const goodSave = () => {
  

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-center',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: 'success',
    title: 'Signed in successfully'
  })
}

const store = async (e) =>{
   e.preventDefault();
    await addDoc (clientsCollection, {
      nombre:nombre,
       rut:rut,
        direccion:direccion,
        contacto:contacto,
        correo:correo,
         telefono:telefono,
          equipo:equipo, modelo:modelo,
          serial:serial,
           fecha:fecha, titulo:titulo,
            tareas:tareas, partes:partes,
             recomendaciones:recomendaciones });

    goodSave();
    navigate ('/');
    window.location.reload(true);
    }

 const inNombre =async()=>{
  const { value: nombre } = await Swal.fire({
    title: 'Entre el nombre',
    input: 'text',
    inputLabel: 'Nombre de la empresa',
    inputPlaceholder: 'Nombre de empresa'
  
  })
  const { value: rut } = await Swal.fire({
    title: 'Entre el Rut',
    input: 'text',
    inputLabel: 'Rut de la empresa',
    inputPlaceholder: 'Rut'
  
  })
  const { value: direccion } = await Swal.fire({
    title: 'Entre La Direccion',
    input: 'text',
    inputLabel: 'Your address',
    inputPlaceholder: 'Formato Ciudad Comuna calle y numero'
  
  })
  const { value: contacto } = await Swal.fire({
    title: 'Nombre de la persona encargada',
    input: 'text',
    inputLabel: 'Nombre',
    inputPlaceholder: 'Nombre y apellido'
  
  })
  const { value: correo } = await Swal.fire({
    title: 'Correo de la Persona encargada',
    input: 'email',
    inputLabel: 'Correo',
    inputPlaceholder: 'su@correo.com'
  }) 
  const { value: telefono} = await Swal.fire({
    title: 'Telefono',
    input: 'tel',
    inputLabel: 'telefono',
    inputPlaceholder: '+56 9 1234 5678'
    })
const { value: equipo} = await Swal.fire({
    title: 'Marca del equipo',
    input: 'text',
    inputLabel: 'Marca',
    inputPlaceholder: 'Epson, Xerox, Rocoh...'
  })
const { value: modelo} = await Swal.fire({
    title: 'Modelo del equipo',
    input: 'text',
    inputLabel: 'Modelo',
    inputPlaceholder: 'modelo'
  })
  const { value: serial} = await Swal.fire({
    title: 'Serial',
    input: 'text',
    inputLabel: 'Serial',
    inputPlaceholder: 'S/N .........'
  })
  const { value: fecha} = await Swal.fire({
    title: 'Fecha del Servicio',
    input: 'text',
    html: '<input class="swal2-input" id="expiry-date">',
    inputLabel: 'dia',
    inputPlaceholder: 'date'
  })
  const { value: titulo} = await Swal.fire({
    title: 'Titulo del Servicio',
    input: 'text',
    inputLabel: 'Titulo',
    inputPlaceholder: 'Titulo'
  })
  
  const { value: tareas } = await Swal.fire({
   title:'tareas realizadas',
    input: 'textarea',
    inputLabel: 'Message',
    inputPlaceholder: 'Escriba sus tareas aqui...',
    inputAttributes: {
      'aria-label': 'Type your message here'
    },
    showCancelButton: true
  })


  const { value: partes} = await Swal.fire({
    title: 'Partes Usadas',
    input: 'text',
    inputLabel: 'partes cambiadas',
    inputPlaceholder: 'partes y cantidad'
  })
  const { value: recomendaciones} = await Swal.fire({
    title: 'Recomendaciones ',
    input: 'textarea',
    inputLabel: 'Nombre',
    inputPlaceholder: 'Nombre y apellido'
  })
  Swal.fire('Presionar el boton Guardar por favor!!!!')
  
  


setNombre(nombre)
setRut(rut)
setDireccion(direccion)
setContacto(contacto)
setCorreo(correo)
setTelefono(telefono)
setEquipo(equipo)
setModelo(modelo)
setSerial(serial)
setFecha(fecha)
setTitulo(titulo)
setTareas(tareas)
setPartes(partes)
setRecomendaciones(recomendaciones)
store();


 }

 
    
  return (
    <div className='container table table-dark table hover'>
      
    <div className='row'>
    <div className='col'>
    <h1>Nuevo cliente</h1>
    <button onClick={() => {inNombre()}} className="btn btn-primary" >Agregar</button>
    <form onSubmit={store}>
    {/* <div hidden className='mb-3'>
        
        
        <label hidden className='form-label' > Nombre</label>
          <input hidden value={nombre} onChange={ (e) => setNombre(e.target.value)} type="text" className='form-control'/>
    </div>

    <div className='mb-3'>
        <label hidden className='form-label' > Rut</label>
          <input hidden value={rut} onChange={ (e) => setRut(e.target.value)} type="text" className='form-control'/>
    </div>

    <div className='mb-3'>
        <label hidden className='form-label' > Direccion</label>
          <input hidden value={direccion} onChange={ (e) => setDireccion(e.target.value)} type="text" className='form-control'/>
    </div> */}
 <button type='submit' className='btn btn-primary' ><i className="fa-solid fa-floppy-disk"></i> Guardar</button>
 
    </form>



    </div>
  </div>
  </div>
  )
}

export default Create