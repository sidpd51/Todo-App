import React from 'react'

function RunningCard() {
  return (
    <div className='w-4/5  bg-white lg:h-36 mx-auto rounded-lg mt-4 p-3 shadow-xl cursor-pointer'>
        <div className="flex flex-row mt-3">
            <p className='font-medium text-sm basis-4/5'>Task title</p>
            <a className='basis-1/5'>details</a>
        </div>
        <div className="flex flex-row mt-3">
            <p className=' text-sm basis-4/5'>Task title</p>
            <a className='basis-1/5'>details</a>
        </div>
        <div className="flex flex-row mt-3">
            <p className=' text-sm basis-4/5'>Task title</p>
            <a className='basis-1/5'>details</a>
        </div>
    </div>
  )
}

export default RunningCard