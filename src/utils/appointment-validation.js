// appointment validation
export const validate = (values) => {
  const errors = {};
  if (!values.date) {
    errors.date = "Required";
  }
  return errors;
};
