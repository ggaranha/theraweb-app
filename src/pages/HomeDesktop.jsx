import React, { Component } from "react";
import "./HomeDesktop.css"
import Button from "../components/Button/Button"
import TextButton from "../components/TextButton/TextButton"
import Header from "../components/Header/Header"
import FeatureTag from "../components/FeatureTag/FeatureTag"
import SignupForm from "../components/SignupForm/SignupForm"
import logo from "../images/icons/desktopLogo.svg"
import timeFeature from "../images/featureImages/Watch.svg"
import micFeature from "../images/featureImages/Microphone.svg"
import dataFeature from "../images/featureImages/DataLines.svg"
import qualityFeature from "../images/featureImages/Diamond.svg"


 
class Home extends Component {

  
  render() {
    return (
        <div>
          <Header logoSrc={logo}></Header>
          <div className="navBar">
            <TextButton className="itemNav" label="HOME"></TextButton>
            <TextButton className="itemNav" label="ARTICLES"></TextButton>
            <TextButton className="itemNav" label="AUDIO"></TextButton>
          </div>
          
          <div className="content">
            <div className="greeting">
              <div className="greetingHeader">
                Join us today
              </div>
              <div className="greetingText">
                Text info
              </div>
            </div>
            <div className="featuresBar">
              <FeatureTag logoSrc={timeFeature} featureHeader="Spend time smart" featureText="Text here" alt="img1"></FeatureTag>
              <FeatureTag logoSrc={micFeature} featureHeader="Audio podcast" featureText="Text here" alt="img2"></FeatureTag>
              <FeatureTag logoSrc={dataFeature} featureHeader="Boost your time" featureText="Text here" alt="img3"></FeatureTag>
              <FeatureTag logoSrc={qualityFeature} featureHeader="Quality" featureText="Text here" alt="img4"></FeatureTag>
            </div>
            <div className="loginContainer">
              <label>
              <div className="loginBtn">
                <Button  className="loginBtn" label="Sign up"></Button>
              </div>
              <div className="signupBtn">
                <Button className="signupBtn" label="Login"></Button>
              </div>
              </label>
            </div>
            <div>
              <SignupForm></SignupForm>
            </div>
            
            
             
          </div>
        </div>
    );
  }
}
 
export default Home;