const BASE_URL = "https://6916afcca7a34288a27e0948.mockapi.io/items";

export async function getItems() {
  const res = await fetch(BASE_URL);
  return res.json();
}

export async function getItem(id) {
  const res = await fetch(`${BASE_URL}/${id}`);
  return res.json();
}

export async function createItem(data) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function updateItem(id, data) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteItem(id) {
  await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
}
