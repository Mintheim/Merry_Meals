import React, { Component } from "react";
import HeaderComponent from "./component/HeaderComponent";
import FooterComponent from "./component/FooterComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeComponent from "./component/HomeComponent";
import AboutUsComponent from "./component/AboutUsComponent";
import DonateComponent from "./component/DonateComponent";
import Register from "./Signup/Register";
import ContactUsComponent from "./component/ContactUsComponent";
import GetMeal from "./Meal/GetMeal";
import OrderMeal from "./Meal/OrderMeal";
import CareGiver from "./Care/CareGiver";
import AboutMeal from "./Meal/AboutMeal";
import GetInvolve from "./GetInvolve/GetInvolve";
import Volunteer from "./GetInvolve/Volunteer";
import Delivery from "./GetInvolve/Delivery";
import InvolveOther from "./GetInvolve/InvolveOther";
import OrderAdult from "./Meal/OrderAdult";
import TermAndCondition from "./component/TermAndCondition";
// import LoginComponent from './user/login/Login';
export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <HeaderComponent></HeaderComponent>

          <Switch>
            <Route exact path="/" component={HomeComponent}></Route>
            <Route path="/about" component={AboutUsComponent}></Route>
            <Route path="/contact" component={ContactUsComponent}></Route>
            <Route path="/donate" component={DonateComponent}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/getmeal" component={GetMeal}></Route>
            <Route path="/ordermeal" component={OrderMeal}></Route>
            <Route path="/caregiver" component={CareGiver}></Route>
            <Route path="/aboutmeal" component={AboutMeal}></Route>
            <Route path="/getinvolve" component={GetInvolve}></Route>
            <Route path="/volunteer" component={Volunteer}></Route>
            <Route path="/delivery" component={Delivery}></Route>
            <Route path="/involveother" component={InvolveOther}></Route>
            <Route path="/orderadult" component={OrderAdult}></Route>
            <Route path="/term" component={TermAndCondition}></Route>
          </Switch>

          <FooterComponent></FooterComponent>
        </Router>
      </div>
    );
  }
}

export default App;
