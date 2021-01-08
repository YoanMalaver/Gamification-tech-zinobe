import React from 'react';
// import * as FaIcons from ' react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as FaIcons from 'react-icons/fa';
import * as GaIcons from 'react-icons/gi';
import * as ImIcons from 'react-icons/im';

export const SidebarData = [
  {
    title: 'DashboardAdmin',
    path: '/dashboardadmin',
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: 'Usuarios',
    // path: '/usuarios',
    icon: <FaIcons.FaUsers />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Crear Usuarios',
        path: '/crearusuarios',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Crear Equipos',
        path: '/crearequipos',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Crear seniorities',
        path: '/crearseniorities',
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: 'Rutas de crecimiento',
    path: '/rutasdecrecimiento',
    icon: <GaIcons.GiAttachedShield />,
  },
  {
    title: 'Gamification',
    // path: '/gamification',
    icon: <RiIcons.RiGameLine />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      // {
      //   title: 'Crear Usuarios',
      //   path: '/crearusuarios',
      //   icon: <IoIcons.IoIosPaper />,
      // },
      {
        title: 'Recompensas',
        path: '/recompensas',
        icon: <ImIcons.ImGift />,
      },
    ],
  },
  {
    title: 'Equipo',
    path: '/equipo',
    icon: <FaIcons.FaTeamspeak />,
  },
];
