import React from 'react';

const UserTable = (props) => {
  console.log(props.users);
  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Nombre</th>
            <th>Cedula</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.users.length > 0 ? (
            props.users.map((user) => (
              <tr key={user.id}>
                <td>{user.email}</td>
                <td>{user.name}</td>
                <td>{user.cedula}</td>
                <td>
                  <button
                    className='button muted-button'
                    onClick={() => {
                      props.editRow(user);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className='button muted-button'
                    onClick={() => {
                      props.deleteUser(user.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No user</td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
};

export default UserTable;
