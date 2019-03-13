// will display Login form and Register form
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

class ShinStart extends Component {
  constructor(props){
    super(props)
  }

  render(){
    if (this.props.mode === 'login'){
      return (
        <div className='login'>
          <form>
            <input type='text' placeholder='username' onChange={(event) => this.props.updateUsername(event.target.value)} />
            <input type='password' placeholder='password' onChange={(event) => this.props.updatePassword(event.target.value)} />
            <button onClick={(e) => {e.preventDefault(); this.props.loginUser(this.props.username, this.props.password)}}>Login</button>
            <a onClick={this.props.toggleMode}>Register</a>
          </form>
        </div>
      )
    }
    if (this.props.mode === 'register'){
      return (
        <div className='register'>
          <form>
            <input type='text' placeholder='username' onChange={(event) => this.props.updateUsername(event.target.value)} />
            <input type='password' placeholder='password' onChange={(event) => this.props.updatePassword(event.target.value)} />
            <input type='text' placeholder='Full Name' onChange={(event) => this.props.updateFullname(event.target.value)} />
            <input type='text' placeholder='Email' onChange={(event) => this.props.updateEmail(event.target.value)} />
            <button onClick={(e) => {e.preventDefault(); this.props.registerUser(this.props.username, this.props.password, this.props.fullname, this.props.email)}}>Submit</button>
          </form>
        <a onClick={this.props.toggleMode}>Cancel</a>
        </div>
      )
    }
  }
}

const MapStateToProps = (store) => ({
  username: store.state.username,
  password: store.state.password,
  email: store.state.email,
  fullname: store.state.fullname,
  mode: store.state.mode
})

const MapDispatchToProps = (dispatch) => ({
  updateUsername: (value) => {
    dispatch(actions.updateUsername(value))
  },
  updatePassword: (value) => {
    dispatch(actions.updatePassword(value))
  },
  updateFullname: (value) => {
    dispatch(actions.updateFullname(value))
  },
  updateEmail: (value) => {
    dispatch(actions.updateEmail(value))
  },
  loginUser: (username, password) => {
    dispatch(actions.loginUser(username, password))
  },
  registerUser: (username, password, fullname, email) => {
    dispatch(actions.registerUser(username, password, fullname, email))
  },
  toggleMode: () => {
    dispatch(actions.toggleMode())
  },
  loginFail: (value) => {
    dispatch(actions.loginFail(value))
  }
})

export default connect(MapStateToProps, MapDispatchToProps)(ShinStart)