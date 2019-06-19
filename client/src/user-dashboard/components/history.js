import React, { Component } from "react";
import { connect } from "react-redux";

class History extends Component {
  state = {};

  render() {
    let i = 0;

    return (
      <div className="jumbotron container-fluid" style={{ maxWidth: "60%" }}>
        <h3>History of appointments taken by you</h3>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Doctor Name</th>
              <th scope="col">Patient Name</th>
              <th scope="col">Checkup</th>
            </tr>
          </thead>
          <tbody>
            {this.props.patient_data.map(p => (
              <tr>
                <td>{++i}</td>
                <td>{p.doctor}</td>
                <td>{p.name}</td>
                <td>{p.checkup}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return state;
};

export default connect(mapStatetoProps)(History);
