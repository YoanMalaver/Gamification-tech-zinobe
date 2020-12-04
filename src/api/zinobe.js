const initialState = {
  users: [
    {
      "id": 1,
      "name": "Andres Perez",
      "cc": "10190345",
      "email": "andres@gmail.com",
      "password": "perez",
      "team": "Data",
      "seniorities": "junior advance",
      "roll": "admin",
      "points": [
        {
          "name": "puntos autodesarrollo",
          "units": 100
        },
        {
          "name": "puntos asistencia",
          "units": 0
        },
        {
          "name": "puntos dirigir talks-talleres",
          "units": 50
        },
        {
          "name": "puntos challenges",
          "units": 10
        },
        {
          "name": "puntos exposiciones",
          "units": 10
        },
        {
          "name": "puntos cumplimiento equipos",
          "units": 100
        },
      ]
    },
    {
      "id": 2,
      "name": "Yesica Acosta",
      "dni": "10190345",
      "email": "yesica@gmail.com",
      "password": "acosta",
      "team": "Data",
      "seniorities": "junior advance",
      "roll": "admin",
      "points": [
        {
          "name": "puntos autodesarrollo",
          "units": 10
        },
        {
          "name": "puntos asistencia",
          "units": 23
        },
        {
          "name": "puntos dirigir talks-talleres",
          "units": 5
        },
        {
          "name": "puntos challenges",
          "units": 18
        },
        {
          "name": "puntos exposiciones",
          "units": 45
        },
        {
          "name": "puntos cumplimiento equipos",
          "units": 124
        },
      ]
    },
    {
      "id": 3,
      "name": "Carlos Lopez",
      "dni": "64739044",
      "email": "carlos@gmail.com",
      "password": "lopez",
      "team": "Tech infraestructura",
      "seniorities": "junior advance",
      "roll": "admin",
      "points": [
        {
          "name": "puntos autodesarrollo",
          "units": 12
        },
        {
          "name": "puntos asistencia",
          "units": 5
        },
        {
          "name": "puntos dirigir talks-talleres",
          "units": 34
        },
        {
          "name": "puntos challenges",
          "units": 87
        },
        {
          "name": "puntos exposiciones",
          "units": 120
        },
        {
          "name": "puntos cumplimiento equipos",
          "units": 200
        },
      ]
    },
    {
      "id": 4,
      "name": "Maria Contreras",
      "dni": "915678",
      "email": "maria@gmail.com",
      "password": "contreras",
      "team": "Diseño",
      "seniorities": "senior advance",
      "roll": "employe",
      "points": [
        {
          "name": "puntos autodesarrollo",
          "units": 50
        },
        {
          "name": "puntos asistencia",
          "units": 10
        },
        {
          "name": "puntos dirigir talks-talleres",
          "units": 10
        },
        {
          "name": "puntos challenges",
          "units": 10
        },
        {
          "name": "puntos exposiciones",
          "units": 40
        },
        {
          "name": "puntos cumplimiento equipos",
          "units": 10
        },
      ]
    },
    {
      "id": 5,
      "name": "Saith Lopez",
      "cc": "10190345",
      "email": "saith@gmail.com",
      "password": "lopez",
      "team": "Tech Front´s",
      "seniorities": "senior advance",
      "roll": "employe",
      "points": [
        {
          "name": "puntos autodesarrollo",
          "units": 200
        },
        {
          "name": "puntos asistencia",
          "units": 10
        },
        {
          "name": "puntos dirigir talks-talleres",
          "units": 20
        },
        {
          "name": "puntos challenges",
          "units": 150
        },
        {
          "name": "puntos exposiciones",
          "units": 110
        },
        {
          "name": "puntos cumplimiento equipos",
          "units": 30
        },
      ]
    },
    {
      "id": 6,
      "name": "Zoraida Segura",
      "cc": "10190345",
      "email": "zoraida@gmail.com",
      "password": "segura",
      "team": "Tech Big Data",
      "seniorities": "senior advance",
      "roll": "employe",
      "points": [
        {
          "name": "puntos autodesarrollo",
          "units": 50
        },
        {
          "name": "puntos asistencia",
          "units": 20
        },
        {
          "name": "puntos dirigir talks-talleres",
          "units": 0
        },
        {
          "name": "puntos challenges",
          "units": 70
        },
        {
          "name": "puntos exposiciones",
          "units": 50
        },
        {
          "name": "puntos cumplimiento equipos",
          "units": 80
        },
      ]
    },
    {
      "id": 7,
      "name": "Carlos Andres",
      "cc": "10190345",
      "email": "carlos7@gmail.com",
      "password": "andres",
      "team": "Tech PM´s",
      "seniorities": "junior advance",
      "roll": "employe",
      "points": [
        {
          "name": "puntos autodesarrollo",
          "units": 150
        },
        {
          "name": "puntos asistencia",
          "units": 60
        },
        {
          "name": "puntos dirigir talks-talleres",
          "units": 10
        },
        {
          "name": "puntos challenges",
          "units": 70
        },
        {
          "name": "puntos exposiciones",
          "units": 20
        },
        {
          "name": "puntos cumplimiento equipos",
          "units": 50
        },
      ]
    },
    {
      "id": 8,
      "name": "Miguel Morales",
      "cc": "10190345",
      "email": "morales@gmail.com",
      "password": "miguelMO",
      "team": "Tech QA",
      "seniorities": "junior advance",
      "roll": "employe",
      "points": [
        {
          "name": "puntos autodesarrollo",
          "units": 150
        },
        {
          "name": "puntos asistencia",
          "units": 60
        },
        {
          "name": "puntos dirigir talks-talleres",
          "units": 10
        },
        {
          "name": "puntos challenges",
          "units": 70
        },
        {
          "name": "puntos exposiciones",
          "units": 20
        },
        {
          "name": "puntos cumplimiento equipos",
          "units": 50
        },
      ]
    },
    {
      "id": 9,
      "name": "Sandra Cardenas",
      "cc": "10190345",
      "email": "sandra45@gmail.com",
      "password": "cardenas45",
      "team": "Tech Términus",
      "seniorities": "junior advance",
      "roll": "employe",
      "points": [
        {
          "name": "puntos autodesarrollo",
          "units": 70
        },
        {
          "name": "puntos asistencia",
          "units": 30
        },
        {
          "name": "puntos dirigir talks-talleres",
          "units": 10
        },
        {
          "name": "puntos challenges",
          "units": 40
        },
        {
          "name": "puntos exposiciones",
          "units": 20
        },
        {
          "name": "puntos cumplimiento equipos",
          "units": 15
        },
      ]
    },
  ],
  team: [
    "Tech Términus",
    "Tech infraestructura",
    "Tech Big Data",
    "Data",
    "Tech Front´s",
    "Tech QA",
    "Diseño",
    "Tech PM´s",
  ],
  roll: ["admin", "employe"]
}

export default initialState;