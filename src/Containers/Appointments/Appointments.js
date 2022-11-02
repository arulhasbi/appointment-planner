import React, { useState } from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import { validate } from "../../utils/appointment-validation";
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
            />
          </div>
          <div className="form-control">
            <label htmlFor="contact">Contact</label>
            <select
              style={{ height: 30 }}
              name="contact"
              id="contact"
              onChange={formik.handleChange}
            >
              <option value="">Choose</option>
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="date">Date</label>
            <DatePicker
              className="full-width"
              selected={date}
              onChange={(date) => setDate(date)}
              dateFormat="MMMM d, yyyy"
            />
          </div>
          <div className="form-control">
            <label htmlFor="time">Time</label>
            <DatePicker
              className="full-width"
              selected={time}
              onChange={(date) => setTime(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="h:mm aa"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
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
