import { NEW_PATIENT } from "../actions/patient-action";

export default function patientReducer(state = [], { type, payload }) {
  switch (type) {
    case NEW_PATIENT: {
      const newPatient = {
        name: payload.name,
        gender: payload.gender,
        number: payload.number,
        dob: payload.dob,
        address: payload.address,
        checkup: payload.checkup,
        doctor: payload.doctor
      };
      if (state.length !== 0) {
        let patient_data = [...state];

        patient_data.push(newPatient);
        if (state.length === 1) {
          patient_data.splice(0, 1);
        }
        return patient_data;
      } else {
        return newPatient;
      }
    }
    default:
      return state;
  }
}
