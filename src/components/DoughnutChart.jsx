import React, { useState, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2'
import initialState from '../api/zinobe'
import '../assets/styles/components/componentsChart.scss'

const DoughnutChart = () => {
  const [doughnutChartData, setDoughnutChartData] = useState({})
  useEffect(() => {
    doughnutChart()
  }, [])

  // función para determinar total de miembros por equipo
  const membersXTeam = (team) => {
    const value = initialState.users.filter((user) => user.team === team)
      .reduce((count, user) => {
        return count + 1
      }, 0)
    return value
  }
  //función  que retorna lista con los equipos
  const listTeam = () => {
    let list = []
    for (let i = 0; i < initialState.team.length; i++) {
      list.push(membersXTeam(initialState.team[i]))
    }
    return list
  }

  const doughnutChart = () => {
    setDoughnutChartData({
      labels: initialState.team,
      datasets: [
        {
          label: 'Participantes',
          data: listTeam(),
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#E040FB', '#673AB7', '#1DE9B6', '#FF9800', '#FFFF00'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#E040FB', '#673AB7', '#1DE9B6', '#FF9800', '#FFFF00']
        }
      ]
    })
  }

  return (
    <section>
      <div className='div__charts'>
        <h2>Participantes</h2>
        <Doughnut data={doughnutChartData} />
      </div>
    </section>
  )
}

export default DoughnutChart
