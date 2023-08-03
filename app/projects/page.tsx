import React from 'react'
import ProjectsClient from '../components/projects/ProjectsClient'

const page = () => {
  return (
    <div id="projects" className="container mx-auto">
      <div className="flex flex-col items-center">
        <ProjectsClient id='hola'/>
      </div>
    </div>
  )
}

export default page