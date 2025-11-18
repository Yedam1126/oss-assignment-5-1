import { useEffect, useState } from "react";
import { getItems } from "../api/itemApi";

export default function ItemList({ onSelect, onCreate }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems().then(setItems);
  }, []);

  return (
    <div>
      <h2>Item List</h2>
      <button onClick={onCreate}>+ Add New</button>
      <ul>
        {items.map(item => (
          <li key={item.id} onClick={() => onSelect(item.id)}>
            {item.title} - {item.price}원
          </li>
        ))}
      </ul>
    </div>
  );
}
