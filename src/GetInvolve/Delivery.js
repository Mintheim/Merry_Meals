import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "../GetInvolve/Delivery.css";
import delivery from "../images/delivery.jpg";
export class Delivery extends Component {
  render() {
    return (
      <div>
        <div class="container-fluid delivery">
          <h2 class="mt-5 mb-3">About Deliver Meals</h2>
          <p>
          Delivering meals is a simple and rewarding way to help seniors and people with disabilities in need of 
          hot meals and a daily visit from a friendly face, and you can do it over lunch! All you need to do is sign up, 
          and you’ll be connected with your neighborhood Meals on Wheels program to get started.

          When you volunteer for Meals on Wheels during your lunch hour, you’re doing your part to guarantee meals are 
          delivered to the more than 4,000 people in need across the Minneapolis/St. Paul metro area. You can volunteer 
          to deliver meals once a week, once a month, with a friend, with a group or on your own – whatever works best for you!


          </p>
        </div>

        <div class="container">
          <h2 class="FAQ-care mt-5 mb-4">FAQ For Deliver Meal</h2>
          <p>
            <h3>How do I sign up to volunteer for Meals on Wheels?</h3>
            
              Fill out the online volunteer form or call us at +95 91111 22522 and we will refer you to your local program.
          </p>
          <p>
            <h3>How long does it take to deliver meals?</h3>
            
            Delivery routes are designed to take no longer than one hour. For most people, it’s easy to deliver meals during the lunch hour.  
          </p>
          <p>
            <h3>When are meals delivered?</h3>
            
            Meals are generally delivered between 11 a.m. and 1 p.m. Monday through Friday.
          </p>
          <p>
            <h3>How often will I deliver meals?</h3>
            
            As often as you would like! Many of our volunteers choose one day a week or one day a month 
            to deliver meals. Commit to a frequency you are comfortable with, and you can always decide 
            to deliver more often in the future.
          </p>
        </div>

        <div class="card mb-5 offer-section mt-5  bg-secondary">
          <div class="row g-0 m-3">
            <div class="col-md-5">
              <img src={delivery} class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-7 ">
              <div class="card-body">
                <p class="card-text">
                Delivering meals is also a great social activity – you can do it with a friend or a group and you’ll get to 
                know your neighbors who also deliver. And you’ll leave knowing the eight to 10 people on your route received 
                the nourishment and personal connection they need.

                Sign up today to deliver meals and know you’ll make an immediate impact on the lives of recipients in your 
                neighborhood. If you have questions, see the list of frequently asked questions, email info.merrymeals.com 
                or call +95 91111 22522 for more information.
                </p>
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

export default Delivery;
