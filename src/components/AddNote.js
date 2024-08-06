import React, { useState } from 'react';
import { useContext } from "react";
import NotesContext from "../context/notes/NotesContext";


export default function AddNote() {
    const { AddNote } = useContext(NotesContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        AddNote({ title, description });
        setTitle('');
        setDescription('');
    };

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="Title">Title address</label>
                        <input type="text" className="form-control" id="title" placeholder="Provide a Title for Note"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Description">Description</label>
                        <input type="text" className="form-control" id="Description" placeholder="Enter your description here"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>

        </div>
    )
}
