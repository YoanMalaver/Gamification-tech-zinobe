import React from 'react'
import DoughnutChart from '../components/DoughnutChart'
import LinearChart from '../components/LinearChart'
import '../assets/styles/components/Graphics.scss'

const Graphics = () => {
  return (
    <div className='div__graphics'>
      <LinearChart />
      <DoughnutChart />
    </div>
  )
}

export default Graphics
