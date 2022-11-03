import { factory, primaryKey, oneOf } from "@mswjs/data";
import { faker } from "@faker-js/faker";

export const db = factory({
  contacts: {
    id: primaryKey(faker.datatype.uuid),
    name: String,
    phone: String,
    email: String,
  },
  appointments: {
    id: primaryKey(faker.datatype.uuid),
    title: String,
    contact: oneOf("contacts"),
    date: String,
    time: String,
  },
});
