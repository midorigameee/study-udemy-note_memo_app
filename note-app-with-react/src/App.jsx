import { useEffect, useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import { v4 as uuid } from "uuid"; // react-uuidの代わり（https://qiita.com/wsigma21/items/1a9a3ccaa05bc525fe48）

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("Notes")) || [] // ローカルストレージにデータがなければ空の配列を初期値にする（||→または）
  );
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    // ローカルストレージに保存
    localStorage.setItem("Notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    // リロード時に一番上のノートが選択されている状態にする
    setActiveNote(notes[0].id);
  }, []);

  const onAddNote = () => {
    console.log("Add new note.");
    const newNote = {
      id: uuid(),
      title: "new note",
      content: "",
      modDate: Date.now(),
    };

    // ...notesで以前のnotesの中身を展開してsetする
    setNotes([...notes, newNote]);
    console.log(notes);
  };

  const onDeleteNote = (id) => {
    const filterNotes = notes.filter((note) => note.id !== id);
    setNotes(filterNotes);
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  const onUpdateNote = (updatedNote) => {
    // 修正された新しいノートの配列を返す

    const updatedNotesArray = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      } else {
        return note;
      }
    });
    console.log("[onUpdateNote] updatedNote:");
    console.log(updatedNote);
    console.log("[onUpdateNote] updatedNotesArray:");
    console.log(updatedNotesArray);
    setNotes(updatedNotesArray);
  };

  return (
    <div className="App">
      <Sidebar
        onAddNote={onAddNote}
        notes={notes}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
  );
}

export default App;
