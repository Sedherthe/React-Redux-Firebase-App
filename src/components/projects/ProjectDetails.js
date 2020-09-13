import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import moment  from 'moment'

const ProjectDetails = (props) => {
  // const id = props.match.params.id;
  // console.log("Id is ", id);
  const { project } = props;
  const { auth } = props;
  if(!auth.uid) return <Redirect to="/SignIn" />
  if (project) {
    return (
      <div className="container section">
        <div className="card z-depth-0">
          <div className="card-content left-align">
            <span className="card-title text-darken-3">{ project.title }</span>
            <p>{ project.content }</p>
          </div>
          <div className="card-action grey lighten-4 left-align">
            <div> Posted by { project.author_first_name } { project.author_last_name } </div>
            <div>{moment(project.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>  
    );
  } else {
    return (
      <div className="container center-align">
        <p> Loading ............. </p>
      </div>
    );
  }
  
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    // what we want to attach to the props
    project : project,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'projects'}
  ])
)(ProjectDetails)