export const postContact = async (data) => {
  const response = await fetch("/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const json = await response.json();
  return json;
};

export const getContacts = async () => {
  const response = await fetch("/contacts");
  const json = await response.json();
  return json;
};
