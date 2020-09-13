import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signIn } from '../../actions/authAction'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

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
      this.props.signIn(this.state);
      console.log(this.state);
    }

    render(){
      const { authError } = this.props;
      const { auth } = this.props;
      if(auth.uid) return <Redirect to="/" />
      return(
        <div className="container">
          <form onSubmit={this.handleSubmit} className="White">
            <h5 className="left-align">Sign In</h5>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input id="password" type="password" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
              <button className="btn blue lighten-2">Login</button>
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
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)