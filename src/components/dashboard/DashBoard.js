import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class DashBoard extends Component {

  render(){
    //console.log(this.props);
    const { auth } = this.props;
    const { projects } = this.props;
    if(!auth.uid) return <Redirect to="SignIn" />
    return(
      <div className="container">
        <div className="row">
          <div className="col s12 m7">
            <ProjectList projects={projects}/>
          </div>
          <div className="col s12 m4 offset-m1">
            <Notifications/>
          </div>
        </div>
      </div>
    );
  }   
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects'}
  ])
)(DashBoard)