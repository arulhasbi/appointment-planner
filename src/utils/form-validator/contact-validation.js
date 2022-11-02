// contact validation
export const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length < 5) {
    errors.name = "Must be 5 characters or more";
  }

  if (!values.phone) {
    errors.phone = "Required";
  } else if (!/^\d+$/.test(values.phone)) {
    errors.phone = "Characters are not accepted, only digit";
  } else if (values.phone.length < 12 || values.phone.length > 12) {
    errors.phone = "Must be exactly 12 digits";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};
