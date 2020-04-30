import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Select from "react-select";
import userService from '../../utils/userService';
import accountTypes from '../../accountTypes';
import Logo from '../../fridge.png';
import './SignupForm.css';

class SignupForm extends Component {

  state = {
    name: '',
    email: '',
    accountType: '',
    password: '',
    passwordConf: '',
    classroomCode: ''
  };

  handleChangeAccType = value => {
    this.setState({ accountType: value.value });
  }

  handleChange = (e) => {
    this.props.updateMessage('');
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.signup(this.state);
      // Let <App> know a user has signed up!
      this.props.handleSignupOrLogin();
      // Successfully signed up - show GamePage
      this.props.history.push('/index');
    } catch (err) {
      // Invalid user data (probably duplicate email)
      this.props.updateMessage(err.message);
    }
  }

  isFormInvalid() {
    return !(this.state.name && this.state.email && this.state.classroomCode && this.state.password === this.state.passwordConf);
  }

  classroomCodeText() {
    return this.state.accountType === 'parent' ? '' : 'Create ';
  }

  render() {
    return (
      <div className="signup-page">
        <div className='logo'>
          <img src={Logo} className="logo" />
        </div>
        <div className="signup-right">
          <header className="header-footer">Sign Up</header>
          <form className="form-horizontal" onSubmit={this.handleSubmit} >
            <div className="form-group">
              <div className="col-sm-12">
                <input type="text" className="form-control" placeholder="Display Name" value={this.state.name} name="name" onChange={this.handleChange} />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <Select
                  name="accountType"
                  onChange={this.handleChangeAccType}
                  options={accountTypes}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <input type="password" className="form-control" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange} />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <input type="password" className="form-control" placeholder="Confirm Password" value={this.state.passwordConf} name="passwordConf" onChange={this.handleChange} />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <input type="text" className="form-control" placeholder={`${this.classroomCodeText()}Classroom Code`} value={this.state.classroomCode} name="classroomCode" onChange={this.handleChange} />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12 text-center">
                <button className="signup-button" disabled={this.isFormInvalid()}>SIGN UP</button>&nbsp;&nbsp;
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignupForm;
