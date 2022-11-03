import React, { useState } from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import { validate } from "../../utils/form-validation/appointment-validation";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import "./Appointments.css";

const Appointments = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const formik = useFormik({
    initialValues: {
      title: "",
      contact: "",
      date: date,
      time: time,
    },
    validate,
    enableReinitialize: true,
    onSubmit: (values) => {
      window.alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <AppointmentsWrapper>
      <AppointmentsMaxWidth>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.title}
              className={
                formik.errors.title && formik.touched.title
                  ? "border-b-4 border-red-500"
                  : "border-b-4 border-indigo-500"
              }
            />
            {formik.errors.title && formik.touched.title ? (
              <p className="error-message">{formik.errors.title}</p>
            ) : null}
          </div>
          <div className="form-control">
            <label htmlFor="contact">Contact</label>
            <select
              style={{ height: 30 }}
              name="contact"
              id="contact"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.contact && formik.touched.contact
                  ? "border-b-4 border-red-500"
                  : "border-b-4 border-indigo-500"
              }
            >
              <option value=""></option>
              <option value="contact-1">Contact-1</option>
            </select>
            {formik.errors.contact && formik.touched.contact ? (
              <p className="error-message">{formik.errors.contact}</p>
            ) : null}
          </div>
          <div className="form-control">
            <label htmlFor="date">Date</label>
            <DatePicker
              name="date"
              selected={date}
              onChange={(date) => setDate(date)}
              dateFormat="MMMM d, yyyy"
              onBlur={formik.handleBlur}
              className={
                formik.errors.date && formik.touched.date
                  ? "border-b-4 border-red-500 w-full"
                  : "border-b-4 border-indigo-500 w-full"
              }
            />
            {formik.errors.date && formik.touched.date ? (
              <p className="error-message">{formik.errors.date}</p>
            ) : null}
          </div>
          <div className="form-control">
            <label htmlFor="time">Time</label>
            <DatePicker
              name="time"
              className={
                formik.errors.time && formik.touched.time
                  ? "border-b-4 border-red-500 w-full"
                  : "border-b-4 border-indigo-500 w-full"
              }
              selected={time}
              onChange={(date) => setTime(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="h:mm aa"
              onBlur={formik.handleBlur}
            />
            {formik.errors.time && formik.touched.time ? (
              <p className="error-message">{formik.errors.time}</p>
            ) : null}
          </div>
          <button
            type="submit"
            className="bg-indigo-600 py-2 rounded-md subpixel-antialiased text-base font-semibold shadow-md text-white"
          >
            Submit
          </button>
        </form>
        <hr className="my-10" />
        <p className="underline underline-offset-8 mb-10">Appointment List</p>
      </AppointmentsMaxWidth>
    </AppointmentsWrapper>
  );
};

const AppointmentsWrapper = styled.div``;
const AppointmentsMaxWidth = styled.div`
  form {
    display: flex;
    flex-direction: column;

    button:hover {
      cursor: pointer;
    }
  }
`;

export default Appointments;
