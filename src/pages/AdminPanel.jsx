import React from 'react'

function AdminPanel() {
  return (
    <div>
       <div className="h-[400px] bg-gray-400 dark:bg-gray-700">
        <h1 className="text-4xl font-bold underline text-blue-500">
          Admin Panel
        </h1>
      </div>
      <div id="projects" className="h-[400px] bg-blue-300">
        <h1 className="text-4xl font-bold underline text-blue-500">
          Your Name
        </h1>
      </div>
      <div id="about" className="h-[400px] bg-green-300">
        <h1 className="text-4xl font-bold underline text-blue-500">
          Your Name
        </h1>
      </div>
      <div id="contact" className="h-[400px] bg-orange-300">
        <h1 className="text-4xl font-bold underline text-blue-500">
          Your Name
        </h1>
      </div>
    </div>
  )
}

export default AdminPanel
