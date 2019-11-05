import React from 'react';
import './sign-in.styles.scss';
import { FormInput } from '../form-input/form-input.component';
import { CustomButton } from '../button/custom-button.styles';

export class SignIn extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      email: '',
      password: '',
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ email: '', password: '' })
  }

  handleChange = e => {
    const {value, name} = e.target;
    this.setState({ [name]: value });
  }

  render(){
    return(
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name="email"
            type="email"
            handleChange={this.handleChange}
            label="Email"
            value={this.state.email}
            required />
          <FormInput 
            name="password"
            type="password"
            handleChange={this.handleChange}
            label="Password"
            value={this.state.password}
            required />
          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    )
  }
}