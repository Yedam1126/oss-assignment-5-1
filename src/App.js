import { useState } from "react";
import ItemList from "./components/ItemList";
import ItemDetail from "./components/ItemDetail";
import ItemForm from "./components/ItemForm";
import { createItem, updateItem } from "./api/itemApi"; // <- 수정됨

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

export default App;
