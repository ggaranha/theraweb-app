import React from 'react'
import userIcon from "../../images/icons/userIcon.svg"
import Button from "../../components/Button/Button"
import MaleIcon from "../../images/icons/male.svg"
import FemaleIcon from "../../images/icons/female.svg"
import "./SignupForm.css"

class SignupForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          gender: true,
          username: '',
          mail: '',
          interests: '',
        };
  
      this.isMale = this.isMale.bind(this);
      this.isFemale = this.isFemale.bind(this);
      this.usernameChangeHandler = this.usernameChangeHandler.bind(this)
      this.mailChangeHandler = this.mailChangeHandler.bind(this)
      this.interestsChangeHandler = this.interestsChangeHandler.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    isMale(event) {
      this.setState({gender: false});
    }

    isFemale(event) {
        this.setState({gender: true});
    }

    usernameChangeHandler(event) {
        this.setState({username: event.target.value});
    }

    mailChangeHandler(event) {
        this.setState({mail: event.target.value});
    }

    interestsChangeHandler(event) {
        this.setState({interests: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Um nome foi enviado: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form className="signupFormContainer" onSubmit={this.handleSubmit}>
          <div>
            <label>
              <Button  className="formLogin" label="Sign up"></Button>
              <Button  className="formSignup" label="Login"></Button>
            </label>
          </div>
            <label>
              <div className="checkBoxContainer">
                <input
                    name="gender"
                    id="male"
                    type="radio"
                    checked={!this.state.gender}
                    onChange={this.isMale} />
                <span className="checkmark">
                  <img className="maleCheckmark" src={MaleIcon} />
                </span>
              </div>
              <div className="checkBoxContainer">
                <input
                    name="gender"
                    id="female"
                    type="radio"
                    checked={this.state.gender}
                    onChange={this.isFemale} />
                <span className="checkmark">
                  <img className="femaleCheckmark" src={FemaleIcon} />
                </span>
              </div>
                
                
          </label>
          {/*
            <div className="infoContainer">
              <label className="boxLabel">
                <input className="usernameBox" type="text" value={this.state.value} onChange={this.usernameChangeHandler} />
                <img src={userIcon} className="userIcon"/>
              </label>
            </div>
            <div className="infoContainer">
              <label>
                <input type="text" className="mailBox" value={this.state.value} onChange={this.mailChangeHandler} />
                <img src={userIcon} className="userIcon"/>              
              </label>
            </div>
            <div className="infoContainer">
            <select className="interestBox" value="What Are Your Interests?" onChange={this.interestsChangeHandler}>
            </select>
            </div>
          
          */}
          <div>
              <label>
                <input className="infoContainer" type="text" value={this.state.value} onChange={this.usernameChangeHandler} />
              </label>
          </div>
          <div>
              <label>
                <input type="text" className="infoContainer" value={this.state.value} onChange={this.mailChangeHandler} />           
              </label>
          </div>
          <div>
            <select className="infoContainer" value="What Are Your Interests?" onChange={this.interestsChangeHandler}>
            </select>
          </div>
          <div>
            <input type="submit" value="Enviar" />
          </div>
        </form>
      );
    }
  }

  export default SignupForm;