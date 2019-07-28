import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link, Redirect } from 'react-router-dom'

const ProjectList = (props) => {
  const { projects, auth } = props
  // if (!auth.uid) return <Redirect to='/signin'></Redirect>
  return (
    <div className="project-list section">
      {projects && projects.map(project => {
        return (
          <Link to={'/project/' + project.id} key={project.id}>
            <ProjectSummary project={project} />
          </Link>
        )
      })}
    </div>
  )
}

export default ProjectList
