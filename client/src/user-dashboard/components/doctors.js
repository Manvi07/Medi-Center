import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { valueAction } from "../../actions/value-action";

class Search_doctors extends Component {
  constructor(props) {
    super(props);
  }

  updatevalue = e => {
    this.props.updateValue(e.target.value);
  };

  render() {
    return (
      <div className="jumbotron container-fluid" style={{ maxWidth: "60%" }}>
        <h2>Select from the available names of the doctors to appoint form</h2>
        <div className="input-group">
          <select
            className="custom-select"
            id="select_doctor"
            onChange={this.updatevalue}
          >
            <option defaultValue>Doctor Name</option>
            {this.props.doctors.map(doctor => (
              <option key={doctor.name} value={doctor.name}>
                {doctor.name}
              </option>
            ))}
          </select>
          <div className="input-group-append">
            <Link to="/appointment-form">
              <button className="btn btn-outline-secondary" type="button">
                Appoint
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return state;
};

const mapActiontoProps = {
  updateValue: valueAction
};

export default connect(
  mapStatetoProps,
  mapActiontoProps
)(Search_doctors);
