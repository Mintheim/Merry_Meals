import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import getinvolve from "../images/getinvolve.jpg";
import meal1 from "../images/meal1.jpg";
import meal2 from "../images/meal2.jpg";
import meal3 from "../images/meal3.jpg";
import "../GetInvolve/GetInvolve.css";
export class GetInvolve extends Component {
  render() {
    return (
      <div class="get-involve-home">
        <div class="card mb-5 offer-section mt-4 get-involve">
          <div class="row g-0">
            <div class="col-md-5">
              <img src={getinvolve} class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-7 ">
              <div class="card-body">
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Porro et nulla corrupti nam quos molestiae aliquam delectus,
                  non eveniet itaque, facere deleniti? Repellat officia
                  consequuntur dolorum aperiam dolores, modi repudiandae! Lorem
                  ipsum dolor sit amet consectetur, adipisicing elit. Porro et
                  nulla corrupti nam quos molestiae aliquam delectus, non ev
                </p>
                <div class="d-flex justify-content-center order-btn">
                  <Link to="/register" class="btn btn-info">
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Get involve introduction end  */}
        {/* Get involve card start w-16*/}
        <div class="container check-meal">
          <div class="row mb-3">
            <div class="col-4 w-16">
              <div class="card check-meal">
                <div class="card-body">
                  <h5 class="card-title">Deliver Meals</h5>
                  <p class="card-text">Content for deliver Meals</p>
                  <img src={meal1} class="card-img-top" alt="..." />
                  {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                  <div class="d-flex justify-content-center order-btn">
                    <Link to="/signup" class="check-meal">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-4 w-16">
              <div class="card check-meal">
                <div class="card-body">
                  <h5 class="card-title">Volunteer</h5>
                  <p class="card-text">Content for voluneers</p>
                  <img src={meal2} class="card-img-top" alt="..." />
                  {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                  <div class="d-flex justify-content-center order-btn">
                    <Link to="/signup" class="check-meal">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-4 w-16">
              <div class="card check-meal ">
                <div class="card-body">
                  <h5 class="card-title">Involve in other way</h5>
                  <p class="card-text">Content for involve in other way</p>
                  <img src={meal3} class="card-img-top" alt="..." />
                  {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                  <div class="d-flex justify-content-center order-btn">
                    <Link to="/signup" class="check-meal">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Get involve card end  */}
      </div>
    );
  }
}

export default GetInvolve;
