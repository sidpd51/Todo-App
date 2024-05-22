import React from 'react'

function AddEditTask() {
  return (
    <section className="bg-gray-100 w-full">
        <div className="mx-auto max-w-screen-lg px-4 py-16 sm:px-6 lg:px-8">
            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                <form action="#" className="space-y-4">
                    <h1 className='text-3xl text-center bg-black text-white py-4 rounded-md font-medium'>Add Task</h1>
                    <div>
                        <label className="not-sr-only font-medium text-gray-500" htmlFor="task">Task Title</label>
                        <input
                        className="w-full rounded-lg p-3 text-sm border border-gray-200 mt-1"
                        placeholder="Go to gym... "
                        type="text"
                        id="task"
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <label className="not-sr-only font-medium text-gray-500 text-sm" htmlFor="start-date">Start Date</label>
                            <input
                                className="w-full rounded-lg border border-gray-200 p-3 text-sm mt-1"
                                type="date"
                                id="start-date"
                            />
                        </div>
                        
                        <div>
                            <label className="not-sr-only font-medium text-gray-500 text-sm" htmlFor="end-date">End Date</label>
                            <input
                                className="w-full rounded-lg border-gray-200 p-3 text-sm border mt-1"
                                type="date"
                                id="end-date"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        
                        <div>
                            <label for="priority" class="not-sr-only font-medium text-gray-500 text-sm">Priority Level</label>
                            <select id="priority" name="priority" class="w-full rounded-lg border border-gray-200 p-3 text-sm mt-1">
                                <option value="high">High</option>
                                <option value="medium">Medium</option>
                                <option value="low" selected>Low</option>
                                <option value="critical">Critical</option>
                            </select>
                        </div>
                        
                        
                        <div>
                            <label for="category" class="not-sr-only font-medium text-gray-500 text-sm">Category</label>
                            <select id="category" name="category" class="w-full rounded-lg border border-gray-200 p-3 text-sm mt-1">
                                <option className='work'>Work</option>
                                <option className='personal'>Personal</option>
                                <option className='home'>Home</option>
                                <option className='health'>Health</option>
                                <option className='finance'>Finance</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className="not-sr-only font-medium text-gray-500 text-sm" htmlFor="message">Task Description</label>

                        <textarea
                        className="w-full rounded-lg border-gray-200 p-3 text-sm border mt-1"
                        placeholder="task description..."
                        rows="8"
                        id="message"
                        ></textarea>
                    </div>
                    <div className="mt-4">
                        <button
                        type="submit"
                        className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium  text-white text-sm sm:w-auto"
                        >
                        Send Enquiry
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default AddEditTask