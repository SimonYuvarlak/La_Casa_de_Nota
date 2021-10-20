import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { TextareaAutosize } from '@mui/material';

function Note(props) {
  const [note, setNote] = React.useState({
    title: props.title,
    content: props.content
  });

  function update(event){
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function handleClick() {
    props.onDelete(props.id);
    console.log(props.id);
  }

  return (
    <div className="note">
        <input
            name="title"
            onChange={update}
            value={note.title}
            placeholder="Title"
        />
        <TextareaAutosize
          placeholder="Material ui"
          defaultValue={note.content}
        />
        <button onClick={handleClick}>
          <DeleteIcon />
        </button>
        <button>
          Update Note
        </button>
    </div>
  );
}

export default Note;
