import { useState, useEffect } from "react";

export default function ItemForm({ initialData, onSubmit }) {
  const [form, setForm] = useState({
    title: "",
    price: "",
    stock: "",
    category: "",
  });

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
      }}
    >
      <input 
        placeholder="Title"
        value={form.title}
        onChange={e => setForm({...form, title: e.target.value})}
      />
      <input
        placeholder="Price"
        value={form.price}
        onChange={e => setForm({...form, price: e.target.value})}
      />
      <input
        placeholder="Stock"
        value={form.stock}
        onChange={e => setForm({...form, stock: e.target.value})}
      />
      <input
        placeholder="Category"
        value={form.category}
        onChange={e => setForm({...form, category: e.target.value})}
      />

      <button type="submit">Submit</button>
    </form>
  );
}
