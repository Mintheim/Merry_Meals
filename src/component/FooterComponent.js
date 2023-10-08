import "./FooterComponent.css";
import React, { Component } from "react";

export class FooterComponent extends Component {
  render() {
    return (
      <div class="footer">
        <div class="row">
          <div class="col-sm-5 col-md-4 p-4">
            <p>Contact</p>
            <p>Phone:+95 91111 22522</p>
            <p>Email:infomerrymeal@gmail.com</p>
            <p>2004 Hlaing Avenur S., Suite 129Minneaplis, MN 55645</p>
          </div>
          <div class="col-sm-5 offset-sm-2  offset-md-4 col-md-4 offset-md-0 p-4 col-sm-8">
            <p>Connect</p>

            <div class="section">
              <a href="#">
                <i class="fa-brands fa-facebook fs-5 mr-3"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-square-instagram fs-5 mr-3"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-square-youtube fs-5 mr-3"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-square-twitter fs-5 mr-3"></i>
              </a>
            </div>

            <div class="contact mt-3 mb-3">
              <a href="/about">About us|</a>
              <a href="contact">Contact Us|</a>
              <a href="/term">Terms and Conditions</a>
            </div>
            <p>@Copyright 2023 MerryMeals on Wheels.ALL Rights Reserved.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterComponent;
