import React from 'react'

const CardProject = ({ data }) => {

  const notForked = data?.filter(item => !item.fork)

  return (
    <div className='flex flex-wrap justify-evenly'>
      {notForked?.map((project, idx) => (
        <a key={idx} href={project.html_url} target="_blank" rel="noreferrer">
          <div className="py-4 px-8 bg-white shadow-lg rounded-lg my-10 mx-2 w-80">
            <div className='h-48'>
              <h2 className="text-gray-800 text-3xl font-semibold">{project.name}</h2>
              <p className="mt-2 text-gray-600">{project.description}</p>
            </div>
            <div className="flex justify-start mt-4">
              <a href="#" className="text-xl font-medium text-origin-color">{project.language}</a>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}

export default CardProject