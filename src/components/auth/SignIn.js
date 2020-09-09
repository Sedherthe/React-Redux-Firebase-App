import React, { Component } from 'react';

class SignIn extends Component {
    state = {
      email: '',
      password: ''
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
            <h5 className="left-align">Sign In</h5>
            <form onSubmit={this.handleSubmit} className="White">
              <div className="input-field">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" onChange={this.handleChange}/>
              </div>
              <div className="input-field">
                <label htmlFor="password">Password</label>
                <input id="password" type="password" onChange={this.handleChange}/>
              </div>
              <div className="input-field">
                <button className="btn red lighten-1">Login</button>
              </div>
            </form>
          </div>
        );
    }
}

export default SignIn;