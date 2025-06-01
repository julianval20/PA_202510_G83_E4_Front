import React, { useState } from 'react';

const RegistroEmp = () => {
  const [form, setForm] = useState({
    nombreEmprendedor: '',
    contraseña: '',
    confirmarContraseña: '',
  });

  const [errores, setErrores] = useState('');

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.contraseña !== form.confirmarContraseña) {
      setErrores('Las contraseñas no coinciden');
      return;
    }
  };

  return (
    <div className='formularioRegistro'>
        <header>REGISTRO DE EMPRENDEDOR</header>
        <form method='post' >
            <input type='text' id='nombreEmprendedor' placeholder='Digita tu nombre'></input>
            <input type='password' id='contraseña' placeholder='*****'></input>
            <input type='password' id='contraseña confirmarContraseña' placeholder='*****'></input>
            
            <button type='submmit'>Registrarme!!!</button>
        </form>    
    </div>
  );
};

export default RegistroEmp;
