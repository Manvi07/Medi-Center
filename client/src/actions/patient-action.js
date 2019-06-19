export const NEW_PATIENT = "updatePatient";

export function patientAction(patient) {
  return {
    type: NEW_PATIENT,
    payload: patient
  };
}
