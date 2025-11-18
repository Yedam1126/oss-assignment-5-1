import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// 기존 components 폴더의 컴포넌트 import
import ItemList from "./components/ItemList";
import ItemDetail from "./components/ItemDetail";
import ItemForm from "./components/ItemForm";

// 기존 api 폴더의 함수 import
import { createItem, updateItem } from "./api/itemApi";

function App() {
  const [page, setPage] = useState("list");
  const [selectedId, setSelectedId] = useState(null);
  const [editData, setEditData] = useState(null);

  if (page === "list")
    return (
      <ItemList
        onSelect={(id) => {
          setSelectedId(id);
          setPage("detail");
        }}
        onCreate={() => {
          setEditData(null);
          setPage("form");
        }}
      />
    );

  if (page === "detail")
    return (
      <ItemDetail
        id={selectedId}
        onEdit={(item) => {
          setEditData(item);
          setPage("form");
        }}
        onBack={() => setPage("list")}
      />
    );

  if (page === "form")
    return (
      <ItemForm
        initialData={editData}
        onSubmit={async (form) => {
          if (editData) {
            await updateItem(editData.id, form);
          } else {
            await createItem(form);
          }
          setPage("list");
        }}
      />
    );
}

// React 18 기준 렌더
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
