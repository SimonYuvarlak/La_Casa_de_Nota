import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./globalStyles";
import { lightTheme, darkTheme } from "./Themes";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    console.log(id + " has been clicked");
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
    console.log(notes);
  }

  function updateNote(note, id){
    console.log("before " + notes, id);
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id ? noteItem : note
      });
    });
    console.log("afer " + notes);
  }

  return (
        <div>
          <Header />
          <CreateArea onAdd={addNote} />
          {notes.map((noteItem, index) => {
            return (
              <Note
                key={index}
                id={index}
                title={noteItem.title}
                content={noteItem.content}
                onDelete={deleteNote}
                update={updateNote}
              />
            );
          })}
          <Footer />
        </div>
  );
}

export default App;
