import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import initialState from '../api/zinobe'
import '../assets/styles/components/componentsChart.scss'


const LinearChart = () => {
  const [linearchartData, setLinearChartData] = useState({})

  useEffect(() => {
    linearChart()
  }, [])

  // función para determinar total de puntos por equipo
  const pointsXTeam = (team) => {
    const value = initialState.users.filter(user => user.team === team)
      .reduce((count, user) => {
        return count + user.points.reduce((count, und) => {
          return count + und.units
        }, 0)
      }, 0)
    return value
  }

  //función  que retorna lista con los totales de puntos por equipo
  const listPoints = () => {
    let list = []
    for (let i = 0; i < initialState.team.length; i++) {
      list.push(pointsXTeam(initialState.team[i]))
    }
    return list
  }

  const linearChart = () => {
    setLinearChartData({
      labels: initialState.team,
      datasets: [
        {
          label: 'Total Puntos',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: listPoints(),
        }
      ]
    })
  }

  return (
    <section>
      <div className='div__charts'>
        <h2>Puntaje acumulado por equipo</h2>
        <Line data={linearchartData} />
      </div>
    </section>
  )
}

export default LinearChart
