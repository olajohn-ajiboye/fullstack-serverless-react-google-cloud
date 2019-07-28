import React from 'react'
import { Redirect } from 'react-router-dom'

const ProjectSummary = (props) => {
  const { project, auth } = props
  // if (!auth.uid) return <Redirect to='/signin'></Redirect>
  return (
    <div className="row">
      <div className="col">
        <div style={{ minWidth: `200px` }} className="card ">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action">
            <p>3rd September, 2019</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectSummary
