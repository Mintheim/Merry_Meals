import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "../Meal/AboutMeal.css";
import meal1 from "../images/meal1.jpg";
import meal2 from "../images/meal2.jpg";
import meal3 from "../images/meal3.jpg";
import meal4 from "../images/meal4.jpg";
import meal5 from "../images/meal5.jpg";
import meal6 from "../images/meal6.jpg";
import meal7 from "../images/meal7.jpg";
import meal8 from "../images/meal8.jpg";
import meal9 from "../images/meal9.jpg";
export class AboutMeal extends Component {
  render() {
    return (
      <div class="about-meal-home">
        <div class="container-fluid">
          <h2 class="FAQ-care">About Meals</h2>
          <p>
            <h3>About the Meals</h3>
            
            Meals on Wheels meals are made fresh, without preservatives in local kitchens.
            The majority of the meals served by our 32 member programs come from the Kitchen of Opportunities, 
            which we operate in partnership with Open Arms of Minnesota.
          </p>
          <p>
            <h3>Two great delivery options</h3>
            
            Daily: Our daily menu offers something different every day of the month and rotates 
            frequently.Meals are delivered ready-to-eat at lunchtime by a friendly volunteer.</p> 
            
            <p>
              Weekly Frozen: Choose from more than 30 delicious options on our Weekly Frozen menu. 
              In many Twin Cities program areas, you can choose which meals you would like to try when you order. Meals come with easy reheating instructions, and can be delivered on a day that works best for you.</p>
          <p>
            <h3>We work with your diet</h3>
            
              If you need it, chances are we have it. We offer gluten-free, lactose-free, vegetarian 
              and vegan options while also accommodating most medical diets. All meals are heart-healthy and diabetic friendly. 
              Renal, mechanical soft and pureed meals are also available.
          </p>
          <p>
            <h3>Cultural options</h3>
            
              Our weekly frozen menu includes both Latino-inspired and Asian-inspired menus. Kosher and halal options are also available.

              Ready to give Meals on Wheels a try? Register now.
          </p>
        </div>
        {/* about meal section end  */}
        <div class="container">
          <h2 class="aboutmeal-title mt-3 mb-3">Check Our Meal</h2>
        </div>
        {/* check our meal section start */}
        <div class="container check-meal">
          <div class="row mb-3">
            <div class="col-4">
              <div class="card check-meal">
                <img src={meal1} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                  <div class="d-flex justify-content-center order-btn">
                    <Link to="/signup" class="check-meal">
                      Order
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-4">
              <div class="card">
                <img src={meal2} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div class="d-flex justify-content-center">
                    <Link to="/signup" class="check-meal">
                      Order
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-4">
              <div class="card">
                <img src={meal3} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div class="d-flex justify-content-center">
                    <Link to="/signup" class="check-meal">
                      Order
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-4">
              <div class="card">
                <img src={meal4} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div class="d-flex justify-content-center">
                    <Link to="/signup" class="check-meal">
                      Order
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-4">
              <div class="card">
                <img src={meal5} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div class="d-flex justify-content-center">
                    <Link to="/signup" class="check-meal">
                      Order
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-4">
              <div class="card">
                <img src={meal6} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div class="d-flex justify-content-center">
                    <Link to="/signup" class="check-meal">
                      Order
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-4">
              <div class="card">
                <img src={meal7} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div class="d-flex justify-content-center">
                    <Link to="/signup" class="check-meal">
                      Order
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-4">
              <div class="card">
                <img src={meal8} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div class="d-flex justify-content-center">
                    <Link to="/signup" class="check-meal">
                      Order
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-4">
              <div class="card">
                <img src={meal9} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div class="d-flex justify-content-center">
                    <Link to="/signup" class="check-meal">
                      Order
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* check our meal section end */}
      </div>
    );
  }
}

export default AboutMeal;
