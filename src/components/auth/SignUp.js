import React, { Component } from 'react';

class SignUp extends Component {
    state = {
      email: '',
      password: '',
      first_name: '',
      last_name: ''
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
            <h5 className="left-align">Sign Up</h5>
            <form onSubmit={this.handleSubmit} className="White">
              <div className="input-field">
                <label htmlFor="first_name">First Name</label>
                <input id="first_name" type="text" onChange={this.handleChange}/>
              </div>
              <div className="input-field">
                <label htmlFor="last_name">Last Name</label>
                <input id="last_name" type="text" onChange={this.handleChange}/>
              </div>
              <div className="input-field">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" onChange={this.handleChange}/>
              </div>
              <div className="input-field">
                <label htmlFor="password">Password</label>
                <input id="password" type="password" onChange={this.handleChange}/>
              </div>
              <div className="input-field">
                <button className="btn red lighten-1">Sign Up</button>
              </div>
            </form>
          </div>
        );
    }
}

export default SignUp;