import React, { Component } from 'react';

class CreateProject extends Component {
    state = {
      title: '',
      content: ''
    }

    handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value
      })
    }

    handleSubmit = (e) => {
      e.preventDefault(); // prevent default behaviour after submission
      console.log(this.state);
    }

    render(){
        return(
          <div className="container">
            <form onSubmit={this.handleSubmit} className="White">
              <h5 className="left-align">Create New Project</h5>
              <div className="input-field">
                <label htmlFor="title">Title</label>
                <input id="title" type="text" onChange={this.handleChange}/>
              </div>
              <div className="input-field">
                <label htmlFor="content"> Project Content</label>
                <textarea id="content" className="materialize-textarea" onChange={this.handleChange}>
                </textarea>
              </div>
              <div className="input-field">
                <button className="btn blue lighten-2">Create</button>
              </div>
            </form>
          </div>
        );
    }
}

export default CreateProject;