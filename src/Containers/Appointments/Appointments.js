import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import { validate } from "../../utils/form-validation/appointment-validation";
import { postAppointment, getAppointments } from "../../api/appointments";
import { getContacts } from "../../api/contacts";
import DatePicker from "react-datepicker";
import AppointmentList from "../../Components/AppointmentList/AppointmentList";

import "react-datepicker/dist/react-datepicker.css";

import "./Appointments.css";

import moment from "moment";

const Appointments = () => {
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const formik = useFormik({
    initialValues: {
      title: "",
      contact: "",
      date: "",
      time: "",
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      await saveAppointment(values);
      await fetchAppointments();
      resetForm();
    },
  });

  const saveAppointment = async (values) => {
    try {
      const response = await postAppointment(values);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAppointments = async () => {
    try {
      const response = await getAppointments();
      setAppointments(response);
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

  const handleChangeDate = async (date) => {
    formik.setValues((prev) => {
      return {
        ...prev,
        date: date,
      };
    });
  };

  const handleChangeTime = async (date) => {
    formik.setValues((prev) => {
      return {
        ...prev,
        time: date,
      };
    });
  };

  useEffect(() => {
    fetchContacts();
    fetchAppointments();
  }, []);

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
              value={formik.values.contact}
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
              {contacts.map((contact) => (
                <option value={contact.id} key={contact.id}>
                  {contact.name}
                </option>
              ))}
            </select>
            {formik.errors.contact && formik.touched.contact ? (
              <p className="error-message">{formik.errors.contact}</p>
            ) : null}
          </div>
          <div className="form-control">
            <label htmlFor="date">Date</label>
            <DatePicker
              name="date"
              selected={formik.values.date}
              onChange={handleChangeDate}
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
              selected={formik.values.time}
              onChange={handleChangeTime}
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
        <AppointmentList>
          {appointments.length !== 0 &&
            appointments.map((appointment) => (
              <div
                key={appointment.id}
                className="shadow-md w-60 text-center py-5 bg-violet-50 rounded-2xl"
              >
                <p className="text-md font-bold">{appointment.title}</p>
                <p className="text-md">
                  {moment(appointment.date).format("dddd Do MMM YYYY")}
                </p>
                <p className="text-md">
                  at {moment(appointment.time).format("LT")}
                </p>
              </div>
            ))}
        </AppointmentList>
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
