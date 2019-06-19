import React, { Component } from "react";
import { connect } from "react-redux";
import { patientAction } from "../../actions/patient-action";
import { Link } from "react-router-dom";
class Appointment_form extends Component {
  state = {
    name: "",
    gender: "",
    number: 0,
    dob: "",
    address: "",
    checkup: "",
    doctor: this.props.value
  };

  onNewPatient = () => {
    this.props.onNewPatient(this.state);
  };

  render() {
    console.log(this.props.value);
    return (
      <div className="jumbotron container-fluid" style={{ maxWidth: "60%" }}>
        <h3>
          <strong>Online Doctor Appointment</strong>
        </h3>
        <h4>
          <div>Doctor-Name : {this.props.value}</div>
        </h4>
        <hr />
        <h4>Patients Personal details</h4>
        <p>
          Fill the form below indicating the appoitment type you need. We will
          get back soon to you for more updates.
        </p>
        <hr />
        <form>
          <div className="form-group row">
            <label htmlFor="patient_name" className="col-sm-2 col-form-label">
              Full Name:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="patient_name"
                onChange={e => {
                  this.setState({ name: e.target.value });
                }}
                value={this.state.name}
                placeholder="Enter your name"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="patient_gender" className="col-sm-2 col-form-label">
              Gender:
            </label>
            <div className="col-sm-10">
              <select
                className="form-control"
                onChange={e => {
                  this.setState({ gender: e.target.value });
                }}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="None">Not willing to disclose</option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label
              htmlFor="patient_m_number"
              className="col-sm-2 col-form-label"
            >
              Mobile number:
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                id="patient_m_number"
                placeholder="Mobile Number"
                onChange={e => {
                  this.setState({ number: e.target.value });
                }}
                value={this.state.number}
              />
            </div>
          </div>
          <div>
            <div className="well">
              <div className="form-group row">
                <label
                  htmlFor="patient_date"
                  className="col-sm-2 col-form-label"
                >
                  Date of Birth
                </label>
                <div className="col-sm-10">
                  <input
                    type="date"
                    className="form-control"
                    id="patient_date"
                    placeholder="Date of Birth"
                    onChange={e => {
                      this.setState({ dob: e.target.value });
                    }}
                    value={this.state.dob}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <label
              htmlFor="patient_address"
              className="col-sm-2 col-form-label"
            >
              Address
            </label>
            <div className="col-sm-10">
              <textarea
                className="form-control"
                id="patient_address"
                rows="3"
                onChange={e => {
                  this.setState({ address: e.target.value });
                }}
                value={this.state.address}
              />
            </div>
          </div>

          <hr />
          <h4>
            <strong>Appointment type</strong>
          </h4>
          <hr />
          <br />
          <h5>Select which appointment type(s) you require </h5>

          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                value="Cervix checkup"
                onChange={e => {
                  this.setState({ checkup: e.target.value });
                }}
              />
              <span />
              Cervix checkup
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                value="Heart checkup"
                onChange={e => {
                  this.setState({ checkup: e.target.value });
                }}
              />
              <span />
              Heart checkup
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                value="Eye checkup"
                onChange={e => {
                  this.setState({ checkup: e.target.value });
                }}
              />
              <span />
              Eye checkup
            </label>
          </div>
          <div className="checkbox ">
            <label>
              <input
                type="checkbox"
                value="Hearing Test"
                onChange={e => {
                  this.setState({ checkup: e.target.value });
                }}
              />
              <span />
              Hearing Test
            </label>
          </div>
          <Link to="/history">
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.onNewPatient}
            >
              Submit
            </button>
          </Link>
        </form>
        <br />
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return state;
};

const mapActiontoProps = {
  onNewPatient: patientAction
};
export default connect(
  mapStatetoProps,
  mapActiontoProps
)(Appointment_form);
