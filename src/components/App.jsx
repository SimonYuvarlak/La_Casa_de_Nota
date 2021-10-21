import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyles";
import { lightTheme, darkTheme } from "./Themes";

function App() {
    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes((prevNotes) => {
            return [...prevNotes, newNote];
        });
    }

    function deleteNote(id) {
        console.log(id + " has been clicked");
        notes.filter((index) => {
            return index !== id;
        });
        setNotes([...notes]);
        console.log(notes);
    }

    function updateNote(id, name, value) {
        if (name && name == "title") {
            notes[id].title = value;
        } else if (name && name == "content") {
            notes[id].content = value;
        }
        setNotes([...notes]);
        console.log(notes);
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
