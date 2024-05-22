import React from 'react'
import RunningCard from './RunningCard'

function CompletedTasks() {
  return (
    <div className="w-5/6 mx-auto h-auto mt-16">
    <h1 className='text-3xl font-medium text-center underline  underline-offset-4 mb-4'>Completed Tasks</h1>
        <div className="grid md:grid-cols-2 gap-4">
            <RunningCard></RunningCard>
            <RunningCard></RunningCard>
            <RunningCard></RunningCard>
            <RunningCard></RunningCard>
            <RunningCard></RunningCard>
            <RunningCard></RunningCard>
            <RunningCard></RunningCard>
        </div>
    </div>
  )
}

export default CompletedTasks