import React from 'react';
import { useForm } from 'react-hook-form';

//atajo sfc
const EditUserForm = (props) => {
  const { register, errors, handleSubmit, setValue } = useForm({
    defaultValues: props.currentUser,
  });

  setValue('name', props.currentUser.name, 'email', props.currentUser.email);
  // setValue('email', props.currentUser.email);
  setValue('cedula', props.currentUser.cedula);

  const onSubmit = (data, e) => {
    // console.log(data);
    data.id = props.currentUser.id;
    props.updateUser(props.currentUser.id, data);
    //Limpiar datos
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
      <button>Editar Usuario</button>
    </form>
  );
};

export default EditUserForm;
