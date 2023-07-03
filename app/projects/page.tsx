import React from 'react'
import ProjectsClient from '../components/projects/ProjectsClient'

const page = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center">
        <ProjectsClient id="projects"/>
      </div>
    </div>
  )
}

export default page