import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import fbLogo from '../images/fb-logo.png'
import googleLogo from '../images/google-logo.png'
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import './Register.css';
export class Register extends Component {
  render() {
    return (
      
      <div class ="container col-10 col-sm-6 col-md-6 col-xl-3 register-form mt-4 p-4 mb-4 rounded-4 text-wrap">
        <h5 class="mb-5 mt-3">Meals on Wheel Register </h5>
        <div className="social-login ml-3 mb-5">
          <div class="social">
             <a className="btn btn-block d-inline-block social-btn google" >
                    <img src={googleLogo} class="w-25 h-25 " alt="Google" /> Log in with Google</a> 
               </div>
          <div class="social">
            <a className="btn btn-block social-btn facebook ">
                    <img src={fbLogo} class="w-25 h-25 p-2" alt="Facebook" /> Log in with Facebook</a>
                </div>
        </div>
        <div className="or-separator mb-5">
                        <span className="or-text">OR</span>
                    </div>
        <form>
          <div class=" mb-3 rounded-4 text-wrap">
             {/* <link to ='' alt='../'><i class="fa-brands fa-google"></i></link> */}
            <input type="email" placeholder="Name" class="form-control text-wrap p-3" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
          </div>
          <div class="mb-3 rounded-4 text-wrap">
            <input type="email" placeholder="Email" class="form-control text-wrap p-3" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
          </div>
           <div class="mb-3 rounded-4 text-wrap">
            <input type="email" placeholder="Password" class="form-control text-wrap p-3" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
          </div>
           <div class="mb-3 rounded-4 text-wrap">
            <input type="email" placeholder="Re-Password" class="form-control text-wrap p-3" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
          </div>
             <div class="mb-3 rounded-4 text-wrap">
        <select class="form-select" aria-label="Default select example">
        <option selected>Fill your type</option>
        <option value="1">Care-Giver</option>
        <option value="2">Partners</option>
        <option value="3">Volunteers</option>
        <option value="4">Members</option>
        </select>
          </div>     
          <div class="form-item d-flex justify-content-center mt-5 mb-3">
            <button type="submit" class="btn btn-success">Register</button>
          </div>
        </form>
        <div class =" d-flex justify-content-center">
          <span>Already have an account?<Link to="/signup">Login!</Link></span>
        </div>
        
{/*     
      <Form.Control size="lg" type="text" placeholder="Login with Google" />
      <br />
      <Form.Control size="lg" type="text" placeholder="Login with Facebook" />
      <br /> */}
      </div>
    )
  }
}

export default Register
