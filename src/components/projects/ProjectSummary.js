import React from 'react'
import projectReducer from '../../reducers/projectReducer';

const ProjectSummary = (props) => {
  return (
    <div className="section">
      <div className="card z-depth-2">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">{props.project.title}</span>
          <p className=""> {props.project.content}</p>
          <p className="grey-text">9th September, 2020</p>
        </div>
      </div>
    </div> 
  );
}

export default ProjectSummary