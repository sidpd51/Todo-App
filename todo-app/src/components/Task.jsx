import React from 'react'
import RunningCard from './RunningCard'
import { Link } from 'react-router-dom'

function Task() {
  return (
    <div className='h-auto p-4'>
      <h1 className='text-xl font-medium text-center underline  underline-offset-4 '>Running Task</h1>
      <div className="wrapper mb-3">
        <RunningCard></RunningCard>
        <RunningCard></RunningCard>
        <RunningCard></RunningCard>
      </div>
      <Link className='text-sm' to='#'>All running Tasks</Link>
    </div>
  )
}

export default Task