import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import UserTable from '../components/UserTable';
import AddUserForm from '../components/AddUserForm';
import EditUserForm from '../components/EditUserForm';
import '../assets/styles/components/CrearEquipos.css';
import { v4 as uuidv4 } from 'uuid';

function CrearUsuarios() {
  const usersData = [
    {
      id: uuidv4(),
      email: 'nombrerandom@gmail.com',
      name: 'Haru',
      cedula: '102165566',
    },
    {
      id: uuidv4(),
      email: 'yoamalave@gmail.com',
      name: 'Yoan',
      cedula: '1016050566',
    },
    {
      id: uuidv4(),
      email: 'malaver@gmail.com',
      name: 'Lucas',
      cedula: '79550566',
    },
  ];
  //state
  const [users, setUsers] = useState(usersData);

  // Agregar usuarios
  const addUser = (user) => {
    user.id = uuidv4();
    setUsers([...users, user]);
  };

  //Eliminar usuarios
  const deleteUser = (id) => {
    console.log(id);
    // setUsers(users.filter(user => user.id !== id))
    const arrayFiltrado = users.filter((user) => user.id !== id);
    setUsers(arrayFiltrado);
  };

  //Editar usuarios
  const [editing, setEditing] = useState(false);

  const [currentUser, setCurrentUser] = useState({
    id: null,
    name: '',
    username: '',
  });

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username,
    });
  };

  //actualizar
  const updateUser = (id, updateUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updateUser : user)));
  };

  return (
    <>
      <Sidebar />
      <div className='container'>
        <div className='flex-row'>
          <div className='flex__row--column'>
            {/* Seccion de creacion de usuarios */}
            <div className='column'>
              {editing ? (
                <div>
                  <h2>Editar Usuario</h2>
                  <EditUserForm
                    currentUser={currentUser}
                    updateUser={updateUser}
                  />
                </div>
              ) : (
                <div>
                  <h2>Registro de Usuarios</h2>
                  <AddUserForm addUser={addUser} />
                </div>
              )}
            </div>

            {/* seccion de usuarios registrados */}
            <div className='reg'>
              <h2>Usuarios Registrados</h2>
              <UserTable
                users={users}
                deleteUser={deleteUser}
                editRow={editRow}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CrearUsuarios;
