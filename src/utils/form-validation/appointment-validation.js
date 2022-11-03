// appointment validation
export const validate = (values) => {
  const errors = {};

  if (!values.title) {
    errors.title = "Required";
  } else if (values.title.length < 5) {
    errors.title = "Must be 5 characters or more";
  }

  if (!values.contact) {
    errors.contact = "Required";
  }

  if (!values.date) {
    errors.date = "Required";
  }

  if (!values.time) {
    errors.time = "Required";
  }

  return errors;
};
