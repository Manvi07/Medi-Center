import React, { Component } from "react";
import Nav from "./user-dashboard/components/nav";
import "./App.css";
import Appointment_form from "./user-dashboard/components/appoint-form";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import History from "./user-dashboard/components/history";
import Search_doctors from "./user-dashboard/components/doctors";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <Nav />
            <br />
            <Switch>
              <Route path="/" exact component={Search_doctors} />
              <Route path="/appointment-form" component={Appointment_form} />
              <Route path="/history" component={History} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
