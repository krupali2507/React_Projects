import React, { useEffect, useState } from "react";

// import NoteContainer from "./Components/NoteContainer/NoteContainer";
// import Sidebar from "./Components/Sidebar/Sidebar";

import "./App.css";

function App() {
  const noteDetail = [
    {
      id: 1,
      title: "Krupali",
      description: "Hello",
    },
    {
      id: 2,
      title: "Krupali",
      description: "Hello",
    },
    {
      id: 3,
      title: "Krupali",
      description: "Hello",
    },
    {
      id: 4,
      title: "Krupali",
      description: "Hello",
    },
  ];
  const [notes, setNotes] = useState(noteDetail);

  // const addNote = (color) => {
  //   const tempNotes = [...notes];

  //   tempNotes.push({
  //     id: Date.now() + "" + Math.floor(Math.random() * 78),
  //     text: "",
  //     time: Date.now(),
  //     color,
  //   });
  //   setNotes(tempNotes);
  // };

  // const deleteNote = (id) => {
  //   const tempNotes = [...notes];

  //   const index = tempNotes.findIndex((item) => item.id === id);
  //   if (index < 0) return;

  //   tempNotes.splice(index, 1);
  //   setNotes(tempNotes);
  // };

  // const updateText = (text, id) => {
  //   const tempNotes = [...notes];

  //   const index = tempNotes.findIndex((item) => item.id === id);
  //   if (index < 0) return;

  //   tempNotes[index].text = text;
  //   setNotes(tempNotes);
  // };

  // useEffect(() => {
  //   localStorage.setItem("notes-app", JSON.stringify(notes));
  // }, [notes]);

  return (
    <div className="App">
      <form className="sidebar">
        <input placeholder="Title" required></input>
        <textarea placeholder="Description" rows={10} required></textarea>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default App;
