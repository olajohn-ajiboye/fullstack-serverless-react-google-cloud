import React from 'react'

const ProjectSummary = ({ project }) => {
  return (
    <div className="row">
      <div className="col">
        <div style={{ minWidth: `200px` }} className="card ">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>Posted By.</p>
          </div>
          <div className="card-action">
            <p>3rd MARCHy</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectSummary
