export default function valueReducer(state = "", { type, payload }) {
  switch (type) {
    case "updateValue":
      return payload.value;
    default:
      return state;
  }
}
