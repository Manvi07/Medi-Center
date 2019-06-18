import React, { Component } from "react";
import { connect } from "react-redux";

class Appointment_form extends Component {
  state = {};
  render() {
    console.log(this.props.value);
    return (
      <div className="container-fluid" style={{ maxWidth: "60%" }}>
        <h3>
          <strong>Online Doctor Appointment</strong>
        </h3>
        <h4>
          <div>Doctor-Name : {this.props.value}</div>
        </h4>
        <br />
        <h4>Patients Personal details</h4>
        <p>
          Fill the form below indicating the appoitment type you need. We will
          get back soon to you for more updates.
        </p>
        <hr />
        <form>
          <div className="form-group row">
            <label for="patient_name" className="col-sm-2 col-form-label">
              Full Name:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="patient_name"
                placeholder="Enter your name"
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="patient_gender" className="col-sm-2 col-form-label">
              Gender:
            </label>
            <div className="col-sm-10">
              <select className="form-control">
                <option>Male</option>
                <option>Female</option>
                <option>Not willing to disclose</option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label for="patient_m_number" className="col-sm-2 col-form-label">
              Mobile number:
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                id="patient_m_number"
                placeholder="Mobile Number"
              />
            </div>
          </div>
          <div>
            <div className="well">
              <div className="form-group row">
                <label for="patient_date" className="col-sm-2 col-form-label">
                  Date of Birth
                </label>
                <div className="col-sm-10">
                  <input
                    type="date"
                    className="form-control"
                    id="patient_date"
                    placeholder="Date of Birth"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <label for="patient_address" className="col-sm-2 col-form-label">
              Address
            </label>
            <div className="col-sm-10">
              <textarea class="form-control" id="patient_address" rows="3" />
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
              <input type="checkbox" value="" />
              <span />
              Cervix checkup
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" value="" />
              <span />
              Heart checkup
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" value="" />
              <span />
              Eye checkup
            </label>
          </div>
          <div className="checkbox ">
            <label>
              <input type="checkbox" value="" />
              <span />
              Hearing Test
            </label>
          </div>
          <button type="button" className="btn btn-primary">
            Submit
          </button>
        </form>
        <br />
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return state;
};

export default connect(mapStatetoProps)(Appointment_form);
