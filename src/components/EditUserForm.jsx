import React from 'react';
import { useForm } from 'react-hook-form';

//atajo sfc
const EditUserForm = (props) => {
  const { register, errors, handleSubmit, setValue } = useForm({
    defaultValues: props.currentUser,
  });

  setValue('name', props.currentUser.name);
  setValue('username', props.currentUser.username);

  const onSubmit = (data, e) => {
    // console.log(data);
    data.id = props.currentUser.id;
    props.updateUser(props.currentUser.id, data);
    //Limpiar datos
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>name</label>
      <input
        type='text'
        name='name'
        ref={register({ require: { value: true, message: 'Campo requerido' } })}
      />
      <div>{errors?.name?.message}</div>
      <label>username</label>
      <input
        type='text'
        name='username'
        ref={register({ require: { value: true, message: 'Campo requerido' } })}
      />
      <div>{errors?.username?.message}</div>
      <button>Edit User</button>
    </form>
  );
};

export default EditUserForm;
