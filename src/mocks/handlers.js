import { rest } from "msw";
import { db } from "../mocks/db";

export const handlers = [
  // create a new contact
  rest.post("/contacts", async (req, res, ctx) => {
    let body;
    await req.json().then((resolved) => {
      body = resolved;
    });
    try {
      await db.contacts.create({
        name: body.name,
        phone: body.phone,
        email: body.email,
      });
    } catch (error) {
      console.log(error);
    }
    return res(
      ctx.status(200),
      ctx.json({
        result: true,
        status: 200,
      })
    );
  }),
  // get all contacts
  rest.get("/contacts", async (req, res, ctx) => {
    const contacts = await db.contacts.getAll();
    return res(ctx.status(200), ctx.json(contacts));
  }),
  // create a new appointment
  rest.post("/appointments", async (req, res, ctx) => {
    let body;
    await req.json().then((resolved) => {
      body = resolved;
    });
    let contact;
    try {
      contact = await db.contacts.findFirst({
        where: {
          id: {
            equals: body.contact,
          },
        },
      });
    } catch (error) {
      console.log(error);
    }
    try {
      await db.appointments.create({
        title: body.title,
        contact: contact,
        date: body.date,
        time: body.time,
      });
    } catch (error) {
      console.log(error);
    }
    return res(
      ctx.status(200),
      ctx.json({
        result: true,
        status: 200,
      })
    );
  }),
  // get all appointments
  rest.get("/appointments", async (req, res, ctx) => {
    const appointments = await db.appointments.getAll();
    return res(ctx.status(200), ctx.json(appointments));
  }),
];
