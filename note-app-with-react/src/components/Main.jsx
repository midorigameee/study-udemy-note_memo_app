import React from "react";
import "./Main.css";

const Main = ({ activeNote, onUpdateNote }) => {
  const onEditNote = (key, value) => {
    console.log("[onEditNote] activeNote:");
    console.log(activeNote);
    onUpdateNote({
      ...activeNote,
      [key]: value, // keyが動的に変わる
      modDate: Date.now(),
    });
  };

  if (!activeNote) {
    return <div className="no-active-note">Note is not selected.</div>;
  }

  /*
  文字打ち込むたびにonChangeが発火する。つまり、onEditNoteが実行される。
  onEditNoteの中でonUpdateNoteを実行している。
  */
  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          id="title"
          type="text"
          value={activeNote.title}
          onChange={(e) => onEditNote("title", e.target.value)}
        />
        <textarea
          id="content"
          placeholder="Input note content"
          value={activeNote.content}
          onChange={(e) => onEditNote("content", e.target.value)}
        ></textarea>
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
        <div className="markdown-preview">{activeNote.content}</div>
      </div>
    </div>
  );
};

export default Main;
