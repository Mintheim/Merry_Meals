import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "../GetInvolve/InvolveOther.css";
import involveinother1 from "../images/involveinother1.jpg";
import involveinother2 from "../images/involveinother2.jpg";
export class InvolveOther extends Component {
  render() {
    return (
      <div class="involve-other-home">
        {/* Become Member start */}
        <div class="container-fluid">
          <h2 class="mt-5 mb-3">Become Member</h2>
          <p>
            Becoming a member of MerryMeals means joining a community that cares. 
            As a member, you'll gain access to a range of benefits and services designed 
            to make mealtime a nourishing and heartwarming experience. Whether you're a senior, 
            caregiver, or someone looking for nutritious meals, we welcome you to become a part of our MerryMeals family.
          </p>
        </div>
        <div class="container">
          <h2 class="FAQ-care mt-5 mb-4">FAQ For Membership</h2>
          <p>
            <h3>Who is eligible to become a member of MerryMeals?</h3>

              MerryMeals membership is open to seniors, individuals with disabilities, 
              and anyone in need of nutritious meals. We also welcome caregivers looking for support.
          </p>
          <p>
            <h3>How do I sign up for membership?</h3>
            

            Signing up is easy! Just click the "Register Now" button on our website, 
            fill out the membership form, and follow the instructions to become a member.
          </p>
          <p>
            <h3>Is there a cost associated with membership?</h3>
            
            We offer different membership options, including both free and premium plans. 
            Our team can help you choose the plan that best suits your needs and budget.

          </p>
          <p>
            <h3>What is the delivery schedule for meals?</h3>
            
            Our delivery schedule is flexible and can be customized to fit your preferences. 
            We offer daily, weekly, and bi-weekly delivery options to ensure you receive meals when it's most convenient for you.
          </p>
        </div>

        <div class="card mb-5 offer-section mt-5  bg-secondary">
          <div class="row g-0 m-3">
            <div class="col-md-5">
              <img
                src={involveinother1}
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-7 ">
              <div class="card-body">
                <p class="card-text">

                Join us at MerryMeals, and let us enhance your mealtime experience while fostering 
                a sense of belonging in our community. If you have more questions or need further 
                information, don't hesitate to reach out to our team.

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
        {/* Become Member end  */}
        <hr class="border opacity-75  border-orange border-5"></hr>
        {/* Become Partner start */}
        <div class="container-fluid">
          <h2 class="mt-5 mb-3">Become Partner</h2>
          <p>
            Becoming a partner with MerryMeals means joining a network of organizations and individuals 
            committed to making a difference in the lives of our community members. Our partnerships play 
            a crucial role in extending our reach and impact, ensuring that more seniors, individuals with 
            disabilities, and those facing food insecurity receive the support they need.
          </p>
        </div>
        <div class="container">
          <h2 class="FAQ-care mt-5 mb-4">FAQ For Partnership</h2>
          <p>
            <h3>How can my business or organization partner with MerryMeals?</h3>

            MerryMeals welcomes various types of partnerships, including corporate sponsorships, 
            donations, employee volunteer programs, community events, and collaborations with local 
            organizations. Contact us to explore the options and find the best fit for your entity.
          </p>
          <p>
            <h3>What benefits can my business or organization gain from partnering with MerryMeals?</h3>
            
              Partnership with MerryMeals offers opportunities for community engagement, 
              corporate social responsibility, and enhanced brand image. You'll also have the satisfaction 
              of knowing that your support directly impacts individuals in need.
              
               </p>
          <p>
            <h3>Are there specific partnership requirements or criteria?</h3>

              We welcome partners of all types and sizes. There are no strict criteria for partnership, 
              and we tailor each partnership to align with the unique goals and capabilities of our partners.
     
          </p>
          <p>
            <h3>Can individuals or community groups partner with MerryMeals?</h3>
            
            Absolutely! We encourage individuals, community groups, and nonprofits to explore 
            partnership opportunities with us. Collaborations of all kinds contribute to our mission of serving the community.
   
          </p>
        </div>
        <div class="card mb-5 offer-section mt-5  bg-secondary">
          <div class="row g-0 m-3">
            <div class="col-md-5">
              <img
                src={involveinother2}
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-7 ">
              <div class="card-body">
                <p class="card-text">
                By becoming a partner with MerryMeals, you're not just supporting a charitable cause; 
                you're becoming a part of a compassionate community dedicated to improving lives. 
                Our partnerships are built on trust, collaboration, and shared values. We believe that 
                together, we can create a future where no one goes hungry, and everyone experiences the warmth of companionship. 
                Your partnership with MerryMeals can be a transformative force for good, touching hearts and making a lasting impact in the communities we serve. We invite you to take this journey with us, where every partnership is a step towards a brighter, more caring tomorrow.
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

        {/* Become Partner end */}
      </div>
    );
  }
}

export default InvolveOther;
