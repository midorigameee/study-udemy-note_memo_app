import { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import uuid from "react-uuid";

function App() {
  const [notes, setNotes] = useState([]);

  const onAddNote = () => {
    console.log("Add new note.");
    const newNote = {
      id: uuid(),
      title: "new note",
      content: "new note content",
      modDate: Date.now(),
    };

    // ...notesで以前のnotesの中身を展開してsetする
    setNotes([...notes, newNote]);
    console.log(notes);
  };

  return (
    <div className="App">
      <Sidebar onAddNote={onAddNote} notes={notes} />
      <Main />
    </div>
  );
}

export default App;
