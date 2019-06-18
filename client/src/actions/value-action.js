export const UPDATE_VALUE = "updateValue";

export function valueAction(value) {
  return {
    type: UPDATE_VALUE,
    payload: {
      value: value
    }
  };
}
