import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "../Care/CareComponent.css";
import caregiver from "../images/caregiver.jpg";
export class CareGiver extends Component {
  render() {
    return (
      <div class="care">
        <div class="container-fluid">
          <h2 class="mt-5 mb-3">About Care Giver</h2>
          <p>
          At MerryMeals, we understand the importance of providing caregivers with 
          the support they need. If you're a caregiver looking for assistance and 
          respite, our services are here to help. We offer convenient and nutritious
          meal options, allowing you to focus on providing care and support to your 
          loved one without the added burden of meal preparation. Join MerryMeals to 
          find the support you need in your caregiving role.
          </p>
        </div>

        <div class="container">
          <h2 class="FAQ-care mt-5 mb-4">FAQ For Care Givers</h2>
          <p>
            <h3>Title</h3>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro et
            nulla corrupti nam quos molestiae aliquam delectus, non eveniet
            itaque, facere deleniti? Repellat officia consequuntur dolorum
            aperiam dolores, modi repudiandae! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Porro et nulla corrupti nam quos
            molestiae aliquam delectus, non eveniet itaque, facere deleniti?
          </p>
          <p>
            <h3>Title</h3>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro et
            nulla corrupti nam quos molestiae aliquam delectus, non eveniet
            itaque, facere deleniti? Repellat officia consequuntur dolorum
            aperiam dolores, modi repudiandae! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Porro et nulla corrupti nam quos
            molestiae aliquam delectus, non eveniet itaque, facere deleniti?
          </p>
          <p>
            <h3>Title</h3>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro et
            nulla corrupti nam quos molestiae aliquam delectus, non eveniet
            itaque, facere deleniti? Repellat officia consequuntur dolorum
            aperiam dolores, modi repudiandae! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Porro et nulla corrupti nam quos
            molestiae aliquam delectus, non eveniet itaque, facere deleniti?
          </p>
          <p>
            <h3>Title</h3>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro et
            nulla corrupti nam quos molestiae aliquam delectus, non eveniet
            itaque, facere deleniti? Repellat officia consequuntur dolorum
            aperiam dolores, modi repudiandae! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Porro et nulla corrupti nam quos
            molestiae aliquam delectus, non eveniet itaque, facere deleniti?
          </p>
        </div>

        <div class="card mb-5 offer-section mt-5  bg-secondary">
          <div class="row g-0 m-3">
            <div class="col-md-5">
              <img src={caregiver} class="img-fluid rounded-start" alt="..." />
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
      </div>
    );
  }
}

export default CareGiver;
