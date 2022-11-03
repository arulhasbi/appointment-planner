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
];
