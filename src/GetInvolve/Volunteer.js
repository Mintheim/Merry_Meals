import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "../GetInvolve/Volunteer.css";
import volunteer from "../images/volunteer.jpg";
export class Volunteer extends Component {
  render() {
    return (
      <div class="volunteer-home">
        <div class="container-fluid">
          <h2 class="mt-5 mb-3">About Volunteer</h2>

          <p>Want to play a role in getting nutritious meals to seniors and people with disabilities 
          in our community? Volunteering at the kitchen is a great way to help!</p>
          
          
          <p>Our meals are produced at Open Arms of Minnesota’s kitchen in South Minneapolis. Volunteers 
          are needed to help with tasks such as wrapping bread rolls, chopping vegetables, scooping cookie 
          dough, and assembling meals for daily delivery. Volunteers play a key role in enabling the kitchen 
          to produce up to 2,500 meals per day for people in need.</p>
          
        </div>

        <div class="container">
          <h2 class="FAQ-care mt-5 mb-4">FAQ For Volunteer</h2>
          <p>
            <h3>How does a typical volunteer kitchen shift work?</h3>
            
            Volunteers check in at the beginning of their shift at the kitchen where they’ll 
            be given a list of tasks for the day. Common kitchen tasks include, but are not limited to, 
            wrapping bread rolls, chopping vegetables, packaging soup, scooping cookie dough, and assembling 
            meals for daily delivery.
          </p>
          <p>
            <h3>When can I volunteer at the kitchen?</h3>
            
            Kitchen shifts are available Monday through Saturday. Sign up for a time that’s convenient for 
            you and you can work with your volunteer manager to schedule regular shifts on an ongoing basis.
          </p>
          <p>
            <h3>How long are the shifts at the kitchen?</h3>
            
            Shifts are 1.5 to 2 hours depending on the time of day you choose.
          </p>
          <p>
            <h3>What should I expect when I come for my first shift?</h3>
            
            Open Arms asks that upon arrival for your first volunteer shift you arrive 
            15 minutes early so that you can receive a tour of the kitchen, learn about 
            safety procedures, and fill out some paperwork.
          </p>
        </div>

        <div class="card mb-5 offer-section mt-5  bg-secondary">
          <div class="row g-0 m-3">
            <div class="col-md-5">
              <img src={volunteer} class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-7 ">
              <div class="card-body">
                <p class="card-text">
                If you are looking for a way to volunteer with Merry Meals that doesn’t rely on operating a vehicle, 
                this is a great opportunity. There are kitchen shifts available between 7:30 a.m. to 7 p.m. 
                Monday through Saturday. Please sign up on Open Arms’ Volunteer Hub for a MPLS Kitchen Shift.

                If you have questions, please contact info@merrymeals.com.</p>
                
                <div class="d-flex justify-content-center order-btn">
                  <Link to="/register" class="btn btn-info">
                    Register Now!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Volunteer;
