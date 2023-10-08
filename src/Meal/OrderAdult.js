import React, { Component } from "react";
import img1 from "../images/cover.jpg";
import { Link, Redirect } from "react-router-dom";
import "../Meal/OrderAdult.css";
import orderadult from "../images/orderadult.jpg";
import meal1 from "../images/omeal1.jpg";
import meal2 from "../images/omeal2.jpg";
import meal3 from "../images/omeal3.jpg";
import meal4 from "../images/meal4.jpg";
import meal5 from "../images/meal5.jpg";
import meal6 from "../images/omeal4.jpg";
import meal7 from "../images/omeal5.jpg";
import meal8 from "../images/meal8.jpg";
import meal9 from "../images/omeal6.jpg";
export class OrderAdult extends Component {
  render() {
    return (
      <div class="order-adult">
        {/* Cover section start */}
        <section class="home" id=" home ">
          <div class="container-cover ">
            <img src={orderadult} class="img-fluid" alt=" " />
          </div>
        </section>

        {/* Cover section end  */}
        <hr class="border border-danger border-3 opacity-75"></hr>

        <div class="ordermeal-text">
          <p>
          Our meals for older adults are designed to prioritize both taste and nutrition.
          We understand the unique dietary requirements of seniors, and our experienced 
          chefs craft menus that cater to those needs. Our goal is to provide balanced, 
          flavorful meals that promote health and well-being. You can trust MerryMeals 
          to deliver the nourishment your body deserves while indulging your taste buds.
          </p>
        </div>
        <hr class="border border-danger border-3 opacity-75 mb-5"></hr>
        <div class="container">
          <h2 class="aboutmeal-title mt-3 mb-5">Check Our Meal</h2>
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

export default OrderAdult;
