import React from 'react'
import { Redirect } from 'react-router-dom'

const ProjectDetails = (props) => {
  // const { auth } = props
  //  if (!auth.uid) return <Redirect to='/signin'></Redirect>
  const { id } = props.match.params
  return (
    <div>
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
    </div>
  )
}

export default ProjectDetails
