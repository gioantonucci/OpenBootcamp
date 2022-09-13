import React, {useState} from 'react'

/**
 * 
 Componente que contiene un formulario para auth de usuarios
 */

const LoginForm = () => {

    const initialCredentials = [
        {
            user: '',
            password: ''
        }
    ];

    const [credentials, setCredentials] = useState(initialCredentials);


  return (
    <div>
    loginForm
    </div>
  );
}

export default LoginForm