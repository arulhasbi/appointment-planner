export const postAppointment = async (data) => {
  const response = await fetch("/appointments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const json = await response.json();
  return json;
};

export const getAppointments = async () => {
  const response = await fetch("/appointments");
  const json = await response.json();
  return json;
};
