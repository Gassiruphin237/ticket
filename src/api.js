const API_URL = "http://localhost:3300/api";
// const API_URL2 = "https://ticketapi-ddsg.onrender.com/api"

export async function registerUser(formData) {
  const res = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  }); 
  return res.json();
}

export async function verifyTicket(id) {
  const res = await fetch(`${API_URL}/verify`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });
  return res.json();
}
