import React, { Component } from "react";
import about from "../images/about.jpg";
export class AboutUsComponent extends Component {
  render() {
    return (
      <div class="container-fluid mt-3 about-us-home">
        <div class="jumbotron">
          <h1>About Meals On Wheels</h1>
          <p>
            The Power of a Warm Meal and a Caring Heart<br></br>
            <br></br>
            Meals on Wheels is a nationwide program that has been transforming
            lives and communities for decades. At its core, it's a simple yet
            profoundly impactful concept: delivering nutritious meals and
            companionship to those who need it most, right to their doorstep.
            <br></br>
            <br></br>A History of Compassion
            <br></br>
            <br></br>
            Meals on Wheels traces its roots back to the United Kingdom during
            World War II when the Women's Volunteer Service for Civil Defense
            provided meals to those affected by the war. In the United States,
            the program officially began in 1954 when it was established in
            Philadelphia. Over the years, it has grown into a network of
            community-based organizations, just like MerryMeals, dedicated to
            ensuring that seniors, individuals with disabilities, and those
            facing challenges have access to good food and friendly faces.
            <br></br>
            <br></br>
            Our Shared Mission
            <br></br>
            <br></br>
            The mission of Meals on Wheels aligns perfectly with the values of
            MerryMeals. We believe that everyone deserves access to nourishing
            meals and the warmth of companionship. Our commitment to this
            mission drives us to provide not just meals but also a lifeline, a
            sense of belonging, and a reason to smile.
          </p>
        </div>
        <div class="jumbotron">
          <h1>How Meals on Wheels Works</h1>
          <p>
            Meals on Wheels operates on a simple yet effective model:
            <br></br>
            <br></br>
            Meal Preparation: Talented chefs and kitchen staff prepare
            nutritious and delicious meals tailored to the dietary needs of
            recipients. The meals are crafted with care and quality in mind.
            <br></br>
            <br></br>
            Volunteer Network: Compassionate volunteers step up to the plate
            (literally) to deliver these meals to the homes of individuals in
            need. They don't just drop off food; they provide a friendly face
            and a moment of connection.
            <br></br>
            <br></br>
            Community Support: Meals on Wheels is more than just a meal delivery
            service; it's a community support system. It organizes events,
            support groups, and activities to combat social isolation and create
            a sense of togetherness.
          </p>
        </div>
        {/* what are we section start */}
        <div class="jumbotron">
          <h1>What are we </h1>

          <p>
            Who We Are
            <br></br>
            <br></br>
            At MerryMeals, we are more than just an organization; we are a
            dedicated community of individuals driven by a shared passion for
            making a difference in the lives of others. Founded in [Year], our
            journey began with a simple yet powerful idea: that everyone,
            regardless of their circumstances, deserves access to nourishing
            meals, companionship, and a brighter tomorrow.
            <br></br>
            <br></br>
            Our Mission
            <br></br>
            <br></br>
            Our mission at MerryMeals is clear and heartfelt: to provide more
            than just meals; we aim to deliver warmth, nutrition, and a sense of
            belonging. We strive to combat food insecurity, loneliness, and
            isolation by connecting our clients with the care and support they
            need.
            <br></br>
            <br></br>
            What Sets Us Apart
            <br></br>
            <br></br>
            What makes MerryMeals unique is our unwavering commitment to the
            well-being of our clients. We understand that a meal is not just
            about sustenance; it's a source of comfort and joy. Our team of
            compassionate chefs, volunteers, and community supporters work
            tirelessly to ensure that every meal we deliver is a symbol of hope
            and a reminder that kindness can be served on a plate.
            <br></br>
            <br></br>
            Our Values
            <br></br>
            <br></br>
            Compassion: We approach every interaction with empathy, ensuring
            that our clients not only receive a meal but also a moment of
            genuine care.
            <br></br>
            <br></br>
            Nutrition: We prioritize nutrition to promote health and well-being,
            crafting menus that cater to diverse dietary needs.
            <br></br>
            <br></br>
            Community: We believe in the power of community to combat isolation.
            We organize events, support groups, and activities that foster
            connections and friendship.
            <br></br>
            <br></br>
            Inclusivity: We welcome everyone with open arms, recognizing the
            diversity of our clients and volunteers.
          </p>
          <div class="container-fluid">
            <img
              src={about}
              class="img-fluid rounded mx-auto d-block"
              alt="..."
            />
          </div>
        </div>

        {/* what are we section end  */}
        {/* What we offer section start */}
        <div class="card mb-5 offer-section mt-4">
          <div class="row g-0">
            <div class="col-md-5">
              <img src={about} class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-7 order-first">
              <div class="card-body">
                <h5 class="card-title">What we offer</h5>
                <p class="card-text">
                  What We Offer at MerryMeals
                  <br></br>
                  <br></br>
                  At MerryMeals, our mission is to serve our community with
                  love, compassion, and delicious food. We take pride in
                  offering a range of services designed to meet the unique needs
                  of seniors, individuals with disabilities, and those facing
                  food insecurity.
                  <br></br>
                  <br></br>
                  How to Get Started
                  <br></br>
                  <br></br>
                  Getting started with MerryMeals is easy:
                  <br></br>
                  <br></br>
                  Explore Our Menu: Take a look at our diverse menu offerings
                  and choose the meals that suit your preferences and dietary
                  needs.
                  <br></br>
                  <br></br>
                  Select Your Schedule: Decide on a delivery schedule that works
                  best for you. We offer flexibility to ensure you receive meals
                  when it's most convenient.
                  <br></br>
                  <br></br>
                  Place Your Order: Once you've made your selections, proceed to
                  place your order. It's a hassle-free process to bring the
                  goodness of MerryMeals to your doorstep.
                  <br></br>
                  <br></br>
                  Join us in making mealtime a delightful and nourishing
                  experience. At MerryMeals, we believe that everyone deserves
                  access to good food, and we're here to bring it to you with a
                  side of warmth and companionship.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* what we offer section end  */}
        {/* our team section start */}

        <div class="container">
          <h2 class="mb-3">Our Team</h2>
          <div class="row">
            <div class="col-3 w-25 h-25">
              <img src={about} class="rounded-circle h-100 w-100" alt="..." />
            </div>
            <div class="col-3 w-25 h-25">
              <img src={about} class="rounded-circle h-100 w-100" alt="..." />
            </div>
            <div class="col-3 w-25 h-25">
              <img src={about} class="rounded-circle h-100 w-100" alt="..." />
            </div>
            <div class="col-3 w-25 h-25">
              <img src={about} class="rounded-circle h-100 w-100" alt="..." />
            </div>
          </div>

          <div class="row mt-5 mb-5">
            <div class="col-3 w-25 h-25">
              <img src={about} class="rounded-circle h-100 w-100" alt="..." />
            </div>
            <div class="col-3 w-25 h-25">
              <img src={about} class="rounded-circle h-100 w-100" alt="..." />
            </div>
            <div class="col-3 w-25 h-25">
              <img src={about} class="rounded-circle h-100 w-100" alt="..." />
            </div>
            <div class="col-3 w-25 h-25">
              <img src={about} class="rounded-circle h-100 w-100" alt="..." />
            </div>
          </div>
        </div>
        {/* our team section end  */}
      </div>
    );
  }
}

export default AboutUsComponent;
