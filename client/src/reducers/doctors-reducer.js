export default function doctorReducer(state = [], { type, payload }) {
  switch (type) {
    case "addDoctor":
      return payload;
    default:
      return state;
  }
}
