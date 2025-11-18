import { useEffect, useState } from "react";
import { getItem, deleteItem } from "../api/itemApi";

export default function ItemDetail({ id, onEdit, onBack }) {
  const [item, setItem] = useState(null);

  useEffect(() => {
    getItem(id).then(setItem);
  }, [id]);

  if (!item) return <p>Loading...</p>;

  return (
    <div>
      <h2>{item.title}</h2>
      <p>가격: {item.price}</p>
      <p>재고: {item.stock}</p>
      <p>카테고리: {item.category}</p>

      <button onClick={() => onEdit(item)}>Edit</button>
      <button onClick={async () => {
        await deleteItem(id);
        onBack();
      }}>
        Delete
      </button>

      <button onClick={onBack}>Back</button>
    </div>
  );
}
