import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import { validate } from "../../utils/contact-validation";
import "./Contact.css";

const Contacts = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      window.alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <ContactsWrapper>
      <ContactsMaxWidth>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.name}
              className={formik.errors.name ? "error-box" : null}
            />
            {formik.errors.name && formik.touched.name ? (
              <p className="error-message">{formik.errors.name}</p>
            ) : null}
          </div>
          <div className="form-control">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              name="phone"
              id="phone"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.phone}
            />
            {formik.errors.phone && formik.touched.phone ? (
              <p className="error-message">{formik.errors.phone}</p>
            ) : null}
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email ? (
              <p className="error-message">{formik.errors.email}</p>
            ) : null}
          </div>
          <button type="submit">Submit</button>
        </form>
        <hr />
      </ContactsMaxWidth>
    </ContactsWrapper>
  );
};

const ContactsWrapper = styled.div``;
const ContactsMaxWidth = styled.div`
  form {
    display: flex;
    flex-direction: column;

    button:hover {
      cursor: pointer;
    }
  }
`;

export default Contacts;
