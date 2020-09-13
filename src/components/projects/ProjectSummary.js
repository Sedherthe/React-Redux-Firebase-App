import React from 'react'
import projectReducer from '../../reducers/projectReducer';
import moment from 'moment'

const ProjectSummary = (props) => {
  const {project} = props;
  return (
    <div className="section">
      <div className="card z-depth-2">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">{props.project.title}</span>
          <p className='grey-text'> Posted by {project.author_first_name} {project.author_last_name}</p>
          <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
        </div>
      </div>
    </div> 
  );
}

export default ProjectSummary