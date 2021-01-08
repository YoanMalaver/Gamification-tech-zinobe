import React, { useState } from 'react';
import { Modal, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from '../components/Sidebar';
import '../assets/styles/components/Equipos.css';

// estilos mediante json
const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: 400,
    backgroundColor: 'white',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: '16px 32px 24px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  textfield: {
    width: '100%',
  },
  button: {
    width: '25%',
  },
}));

function CrearSeniorities() {
  // state = {
  //   data: data,
  // };

  const data = [
    {
      id: 1,
      equipo: 'Frontend',
      descripcion: 'Agrega una descripcion',
    },
    {
      id: 2,
      equipo: 'Backend',
      descripcion: 'Agrega una descripcion',
    },
  ];

  const styles = useStyles();
  const [modal, setModal] = useState(false);

  // metodo para abrir el modal
  const abrirCerrarModal = () => {
    setModal(!modal);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConsolaSeleccionada((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(consolaSeleccionada);
  };

  //  tabla del formulario modal
  const body = (
    <div className={styles.modal}>
      <div align='center'>
        <h2>Crear Seniorities</h2>
      </div>
      <TextField
        name='equipo'
        label='Equipo'
        className={styles.textfield}
        onChange={handleChange}
      />
      <br />
      <TextField
        name='descripcion'
        label='Descripcion'
        className={styles.textfield}
        onChange={handleChange}
      />
      <br />
      <div align='right'>
        {' '}
        <Button className={styles.button}>Enviar</Button>
        <Button className={styles.button} onClick={() => abrirCerrarModal()}>
          Cancelar
        </Button>
      </div>
    </div>
  );

  //  capturar datos del form modal
  const [consolaSeleccionada, setConsolaSeleccionada] = useState({
    equipo: '',
    descripcion: '',
  });

  return (
    <>
      <Sidebar />
      <div className='container'>
        <button className='verde' onClick={() => abrirCerrarModal()}>
          Crear Seniorities
        </button>
        <table>
          <thead>
            <tr>
              <th>Cargo</th>
              <th>Descripcion</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map((elemento, index) => (
              <tr key={index}>
                <td>{elemento.equipo}</td>
                <td>{elemento.descripcion}</td>
                <td>
                  <button className='muted-button'>Editar</button>
                  <button className=' muted-button rojo'>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal open={modal} onClose={abrirCerrarModal}>
        {body}
      </Modal>
    </>
  );
}

export default CrearSeniorities;
