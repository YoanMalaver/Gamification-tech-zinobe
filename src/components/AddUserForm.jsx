import React from 'react';
import { useForm } from 'react-hook-form';

//atajo sfc
const AddUserForm = (props) => {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    // console.log(data);
    props.addUser(data);
    //Limpiar datos
    e.target.reset();
  };

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
                require: { value: true, message: 'Campo requerido' },
              })}
            />
            <span className='barra'> </span>
            <label>Email</label>
            <div>{errors?.name?.message}</div>
          </div>

          <div className='group'>
            <input
              type='text'
              name='name'
              ref={register({
                require: { value: true, message: 'Campo requerido' },
              })}
            />
            <span className='barra'> </span>
            <label>Nombre</label>
            <div>{errors?.name?.message}</div>
          </div>

          <div className='group'>
            <input
              type='text'
              name='cedula'
              ref={register({
                require: { value: true, message: 'Campo requerido' },
              })}
            />
            <span className='barra'> </span>
            <label>Cedula</label>
            <div>{errors?.name?.message}</div>
          </div>

          <div className='group'>
            <input
              type='text'
              name='contraseña'
              ref={register({
                require: { value: true, message: 'Campo requerido' },
              })}
            />
            <span className='barra'> </span>
            <label>Contraseña</label>
            <div>{errors?.name?.message}</div>
          </div>

          <div className='group'>
            <input
              type='text'
              name='Verificacion'
              ref={register({
                require: { value: true, message: 'Campo requerido' },
              })}
            />
            <span className='barra'> </span>
            <label>Verificación de Contraseña</label>
            <div>{errors?.name?.message}</div>
          </div>
          <button>Anadir Nuevo usuario</button>
        </div>
      </form>
    </section>
  );
};

export default AddUserForm;
