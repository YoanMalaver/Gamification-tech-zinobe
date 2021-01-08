import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';

//atajo sfc
const AddUserForm = (props) => {
  const { register, errors, handleSubmit, watch } = useForm();

  const onSubmit = (data, e) => {
    // console.log(data);
    props.addUser(data);
    //Limpiar datos
    e.target.reset();
    // alert(JSON.stringify(data)); para ver si se envian los datos con un evento
  };
  // comparar campos de password
  const password = useRef({});
  password.current = watch('password', '');

  return (
    <section className='register'>
      <form
        className='login__container--form'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='form'>
          {/* Formulario de registro */}
          <div className='group'>
            <input
              type='text'
              name='email'
              ref={register({
                required: { value: true, message: 'Campo requerido' },
              })}
            />
            <span className='barra'> </span>
            <label>Email</label>
            <div>{errors?.email?.message}</div>
          </div>

          <div className='group'>
            <input
              type='text'
              name='name'
              ref={register({
                required: { value: true, message: 'Campo requerido' },
              })}
            />
            <span className='barra'> </span>
            <label>Nombre</label>
            <div>{errors?.name?.message}</div>
          </div>

          <div className='group'>
            <input
              type='number'
              name='cedula'
              ref={register({
                required: { value: true, message: 'Campo requerido' },
              })}
            />
            <span className='barra'> </span>
            <label>Cedula</label>
            <div>{errors?.cedula?.message}</div>
          </div>

          <div className='group'>
            <input
              type='password'
              name='password'
              ref={register({
                required: { value: true, message: 'Campo requerido' },
              })}
            />
            <span className='barra'> </span>
            <label>Contraseña</label>
            <div>{errors?.password?.message}</div>
          </div>

          <div className='group'>
            <input
              type='password'
              name='verificacion'
              ref={register({
                required: { value: true, message: 'Campo requerido' },
                validate: (value) =>
                  value === password.current || 'La contraseña no coincide',
              })}
            />
            <span className='barra'> </span>
            <label>Verificación de Contraseña</label>
            <div>
              {errors.verificacion && <p>{errors.verificacion.message}</p>}
            </div>
          </div>
          <button type='submit'>Anadir Nuevo usuario</button>
        </div>
      </form>
    </section>
  );
};

export default AddUserForm;
