import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import { signUp } from '../../actions/authAction'

class SignUp extends Component {
    state = {
      email: '',
      password: '',
      firstName: '',
      lastName: ''
    }

    handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value
      })
    }

    handleSubmit = (e) => {
      e.preventDefault(); // prevent default behaviour after submission
      console.log("new user is ", this.state);
      this.props.signUp(this.state);
    }

    render(){
      const { auth, authError } = this.props;
      if(auth.uid) return <Redirect to="/" />

      return(
        <div className="container">
          <form onSubmit={this.handleSubmit} className="White">
            <h5 className="left-align">Sign Up</h5>
            <div className="input-field">
              <label htmlFor="firstName">First Name</label>
              <input id="firstName" type="text" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
              <label htmlFor="lastName">Last Name</label>
              <input id="lastName" type="text" onChange={this.handleChange}/>
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
              <button className="btn blue lighten-2">Sign Up</button>
              <div className="red-text center">
                { authError ? <p>{ authError }</p> : null}
              </div>
            </div>
          </form>
        </div>
      );
    }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (new_user) => dispatch(signUp(new_user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)