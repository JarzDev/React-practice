import React, { useState } from 'react'
import './Login.css';
import appFirebase from '../firebaseConfig/firebase'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2';

const Login = () => {
    const auth = getAuth(appFirebase)
    const [registrando, setRegistrando] = useState(false)
    const navigate = useNavigate();
   
    const logError =(error)=>{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${error}`,
            
          })
    }

    const logOk =()=>{
        Swal.fire({
            icon: 'success',
            title: 'Usuario Valido',
            text: 'Agregar o ver Informe...',
            
          })
    }
    const regOk =()=>{
        Swal.fire({
            icon: 'success',
            title: 'Usuario Registrado',
            text: 'Procede a iniciar sesion ...',
            
          })
    }
  
    const handlerSubmit = async(e)=>{
       try{ e.preventDefault();
        const correo = e.target.email.value;
        const contraseña = e.target.password.value;

        if(registrando){
            await createUserWithEmailAndPassword(auth, correo, contraseña);
            regOk();
            window.location.reload(true);
        }
        else{ 
            await  
            signInWithEmailAndPassword(auth, correo, contraseña);
            logOk();
            navigate ('/show');
        }
    }catch(error){
    console.log(error)
    logError(error)
    }
}

    return (
        <div className='container'> 
       
        <div className='col-md-4  mx-auto'>
            <img  src='https://smartgraphics.cl/wp-content/uploads/2021/07/logo_SGS_Sep20.png'  id='logo'/>
      <div className="row container p-4">
      
        {/* esta es el div del formulario */}
        <div>
          <div className=" mt-5 ms-5">
            <h1>{registrando ? "Registrate" : "Inicia sesión"}</h1>
            <form className="card card-body" onSubmit={handlerSubmit}>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="ingresar email"
                  id="email"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="ingresa la contraseña"
                  id="password"
                />
              </div>

              <button type="submit" className="btn btn-primary">
                {registrando ? "Registrate" : "Inicia sesión"}
              </button>
            </form>

            <div className="form-group">
              <button
                className="btn btn-secondary mt-4 form-control"
                onClick={() => setRegistrando(!registrando)}
              >
                {registrando
                  ? "Ya tienes cuenta? Inicia sesion"
                  : "no tienes cuenta? Registrate"}
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
      
    );
}

export default Login 
