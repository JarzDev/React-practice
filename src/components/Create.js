import React,{useState} from 'react'
import {collection, addDoc} from 'firebase/firestore'
import {db} from '../firebaseConfig/firebase'
import Swal from 'sweetalert2';
import appFirebase from '../firebaseConfig/firebase';
import {useNavigate} from 'react-router-dom'
import {getAuth} from 'firebase/auth'

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
    const [horas, setHoras] = useState('');

    const navigate = useNavigate();
    const auth = getAuth(appFirebase)
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
      window.location.reload(true);
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
             recomendaciones:recomendaciones,
              horas:horas });

     goodSave();
     }

 const inNombre =async()=>{
   const { value: nombre } = await Swal.fire({
    title: 'Nombre de la empresa',
    input: 'text',
    inputPlaceholder: 'Nombre de empresa',
    allowEscapeKey: false,
    allowOutsideClick: false,
    inputValidator: (value) => {
      if (!value) {
        return 'Por favor escribe algo!!'
      }
    }
  
  })
  const { value: rut } = await Swal.fire({
    title: 'Ingrese el Rut de la empresa',
    input: 'text',
    inputLabel: 'Rut#',
    inputPlaceholder: '11.222.333-4',
    allowEscapeKey: false,
    allowOutsideClick: false,
    inputValidator: (value) => {
      if (!value) {
        return 'Por favor escribe algo!!'
      }
    }
    
  
  })
  const { value: direccion } = await Swal.fire({
    title: 'Direccion de la empresa empresa',
    input: 'text',
    inputLabel: 'Formato Calle, Numero, Comuna y Ciudad',
    inputPlaceholder: 'Av Vitacura Numero 4040 , Vitacura, Santiago',
    allowEscapeKey: false,
    allowOutsideClick: false,
    inputValidator: (value) => {
      if (!value) {
        return 'Por favor escribe algo!!'
      }
    }
  
  })
  const { value: contacto } = await Swal.fire({
    title: 'Nombre de la Persona de Contacto',
    input: 'text',
    inputLabel: 'Nombre y Apellido',
    inputPlaceholder: 'Pedro Perez',
    allowEscapeKey: false,
    allowOutsideClick: false,
    inputValidator: (value) => {
      if (!value) {
        return 'Por favor escribe algo!!'
      }
    }
  
  })
  const { value: correo } = await Swal.fire({
    title: 'Correo de la Persona de Contacto',
    input: 'email',
    inputLabel: 'Correo',
    inputPlaceholder: 'su@correo.com',
    allowEscapeKey: false,
    allowOutsideClick: false,
  }) 
  const { value: telefono} = await Swal.fire({
    title: 'Telefono',
    input: 'tel',
    inputLabel: 'Telefono',
    inputPlaceholder: '+56 9 1234 5678',
    allowEscapeKey: false,
    allowOutsideClick: false,
    inputValidator: (value) => {
      if (!value) {
        return 'Por favor escribe algo!!'
      }
    }
    })
const { value: equipo} = await Swal.fire({
    title: 'Marca del Equipo',
    input: 'text',
    inputLabel: 'Marca',
    inputPlaceholder: 'Epson, Xerox, Ricoh, Duplo...',
    allowEscapeKey: false,
    allowOutsideClick: false,
    inputValidator: (value) => {
      if (!value) {
        return 'Por favor escribe algo!!'
      }
    }
  })
const { value: modelo} = await Swal.fire({
    title: 'Modelo del Equipo',
    input: 'text',
    inputLabel: 'Modelo',
    inputPlaceholder: 'S40600, S60600,....',
    allowEscapeKey: false,
    allowOutsideClick: false,
    inputValidator: (value) => {
      if (!value) {
        return 'Por favor escribe algo!!'
      }
    }
  })
  const { value: serial} = await Swal.fire({
    title: 'Serial',
    input: 'text',
    inputLabel: 'Serial',
    inputPlaceholder: 'S/N .........',
    allowEscapeKey: false,
    allowOutsideClick: false,
    inputValidator: (value) => {
      if (!value) {
        return 'Por favor escribe algo!!'
      }
    }
  })
  const { value: fecha} = await Swal.fire({
    title: 'Fecha del Servicio',
    input: 'text',
    inputLabel: 'Formato Dia, Mes, Año',
    inputPlaceholder: '23/06/2022',
    allowEscapeKey: false,
    allowOutsideClick: false,
    inputValidator: (value) => {
      if (!value) {
        return 'Por favor escribe algo!!'
      }
    }
  })
  const { value: titulo} = await Swal.fire({
    title: 'Titulo del Servicio',
    input: 'text',
    inputLabel: 'Titulo',
    inputPlaceholder: 'Titulo',
    allowEscapeKey: false,
    allowOutsideClick: false,
    inputValidator: (value) => {
      if (!value) {
        return 'Por favor escribe algo!!'
      }
    }
  })
  
  const { value: tareas } = await Swal.fire({
   title:'tareas realizadas',
    input: 'textarea',
    inputLabel: 'Message',
    inputPlaceholder: 'Escriba sus tareas aqui...',
    allowEscapeKey: false,
    allowOutsideClick: false,
    inputAttributes: {
      'aria-label': 'Type your message here'
    },
    inputValidator: (value) => {
      if (!value) {
        return 'Por favor escribe algo!!'
      }
    }
  })


  const { value: partes} = await Swal.fire({
    title: 'Partes Usadas',
    input: 'text',
    inputLabel: 'Partes Cambiadas',
    inputPlaceholder: 'partes y cantidad',
    allowEscapeKey: false,
    allowOutsideClick: false,
    inputValidator: (value) => {
      if (!value) {
        return 'Por favor escribe algo!!'
      }
    }
  })
  const { value: recomendaciones} = await Swal.fire({
    title: 'Recomendaciones ',
    input: 'textarea',
    inputLabel: 'Comentarios y Tips',
    inputPlaceholder: 'Recomandaciones',
    allowEscapeKey: false,
    allowOutsideClick: false,
    inputValidator: (value) => {
      if (!value) {
        return 'Por favor escribe algo!!'
      }
    }
  })
  const { value: horas} = await Swal.fire({
    title: 'Horas de Trabajo',
    input: 'text',
    inputLabel: 'Horas Usadas',
    inputPlaceholder: '1',
    allowEscapeKey: false,
    allowOutsideClick: false,
    inputValidator: (value) => {
      if (!value) {
        return 'Por favor escribe algo!!'
      }
    }
  })
  Swal.fire('Si desea guardar estos datos presionar el boton guardar')
  
  


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
setHoras(horas)
store();
}

const LogOut = async()=>{
  
  navigate('/')
   }

 
    
  return (
    <div className='container table table-dark table hover'>
      
    <div className='row'>
    <div className='col'>
    <h1>Nuevo cliente</h1>
    <button onClick={() => {inNombre()}} className="btn btn-primary" >Agregar</button>
    <button onClick={() => {LogOut()}} className="btn btn-primary" >Cerrar Sesion</button>
    <form onSubmit={store}>
    <button  type='submit'  className='btn btn-primary' ><i className="fa-solid fa-floppy-disk"></i> Guardar</button>
    <div hidden className='mb-3'>
        
        <label hidden className='form-label' > Nombre</label>
          <input hidden value={nombre} onChange={ (e) => setNombre(e.target.value)} type="text" className='form-control' required/>
    </div>
    </form>
    </div>
   </div>
   </div>
  )
}

export default Create