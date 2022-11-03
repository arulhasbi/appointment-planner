import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import { validate } from "../../utils/form-validation/contact-validation";
import { postContact, getContacts } from "../../api/contacts";
import ContactList from "../../Components/ContactList/ContactList";
import "./Contacts.css";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      await saveContacts(values);
      resetForm();
      await fetchContacts();
    },
  });

  const saveContacts = async (values) => {
    try {
      const response = await postContact(values);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchContacts = async () => {
    try {
      const response = await getContacts();
      setContacts(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

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
              className={
                formik.errors.name && formik.touched.name
                  ? "border-b-4 border-red-500"
                  : "border-b-4 border-indigo-500"
              }
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
              className={
                formik.errors.phone && formik.touched.phone
                  ? "border-b-4 border-red-500"
                  : "border-b-4 border-indigo-500"
              }
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
              className={
                formik.errors.email && formik.touched.email
                  ? "border-b-4 border-red-500"
                  : "border-b-4 border-indigo-500"
              }
            />
            {formik.errors.email && formik.touched.email ? (
              <p className="error-message">{formik.errors.email}</p>
            ) : null}
          </div>
          <button
            type="submit"
            className="bg-indigo-200 py-2 rounded-lg subpixel-antialiased text-base font-semibold shadow-md"
          >
            Submit
          </button>
        </form>
        <hr className="my-10" />
        <p className="underline underline-offset-8 mb-10">Contact List</p>
        <ContactList>
          {contacts.length !== 0 &&
            contacts.map((contact) => (
              <div
                key={contact.id}
                className="shadow-md w-60 text-center py-5 bg-violet-50 rounded-2xl"
              >
                <p class="text-md">{contact.name}</p>
                <p class="text-md">{contact.phone}</p>
                <p class="text-md">{contact.email}</p>
              </div>
            ))}
        </ContactList>
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
