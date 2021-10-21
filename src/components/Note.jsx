import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { TextareaAutosize, Input } from '@mui/material';


function Note(props) {
  const [note, setNote] = React.useState({
    title: props.title,
    content: props.content
  });

  function handleClick() {
    props.onDelete(props.id);
  }

  function update(event){
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
    props.update(note, props.id);
  }

  return (
    <div className="note">
        <Input
          name="title"
          onChange={update}
          value = {note.title}
          placeholder="Title"
        />
        <TextareaAutosize
          placeholder="Content"
          value = {note.content}
          onChange={update}
          name="content"
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
