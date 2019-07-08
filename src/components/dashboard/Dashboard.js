import React from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
const Dashboard = () => {
  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s-12 m6">
          <div className="col s12 m5 offset-m1">
            <Notifications></Notifications>
            <ProjectList></ProjectList>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
