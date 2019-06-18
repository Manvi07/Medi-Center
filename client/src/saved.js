<div className="input-group">
          <select
            className="custom-select"
            id="select_doctor"
            onChange={this.props.onselect}
          >
            {this.props.doctors.map(doctor => (
              <option key={doctor} value={doctor}>
                {doctor}
              </option>
            ))}
          </select>
          <div className="input-group-append">
            <Link
              to="/appointment-form"
              onClick={() => this.props.onSearch(this.state.value)}
            >
              <button className="btn btn-outline-secondary" type="button">
                Appoint
              </button>
            </Link>
          </div>