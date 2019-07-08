import React from 'react'

const ProjectDetails = (props) => {
  const { id } = props.match.params
  return (
    <>
      <h5> Lord is Good</h5>
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">
              Title {id}
            </span>
            <p> LKL;CJLKSNCKCS';CL</p>
            <div className="grey lighten-4 grey-text card-action">
              <div>Posted By John</div>
              <div>Date hshsshsh</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectDetails
