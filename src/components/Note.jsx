import React, { useEffect, useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { TextareaAutosize, Input } from "@mui/material";

function Note(props) {
    useEffect(() => {}, [props]);

    function handleClick() {
        props.onDelete(props.id);
    }

    function update(event) {
        const { name, value } = event.target;
        props.update(props.id, name, value);
    }

    return (
        <div className="note">
            <Input
                name="title"
                onChange={update}
                value={props.title}
                placeholder="Title"
            />
            <TextareaAutosize
                placeholder="Content"
                value={props.content}
                onChange={update}
                name="content"
            />
            <button onClick={handleClick}>
                <DeleteIcon />
            </button>
            <button>Update Note</button>
        </div>
    );
}

export default Note;
