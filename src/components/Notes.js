import { useContext } from "react";
import NotesContext from "../context/notes/NotesContext";



function Notes() {
    // Getting  from NotesContext
    const { Notes, DeleteNote } = useContext(NotesContext);
    if (!Notes) {
        return <div className="text-center mt-5">Loading...</div>;
    }

    return (
        <div className="container mt-5">
            <div className="card text-center">

                <div className="card-header">
                    <h1 className="mb-0">Your Notes</h1>

                </div>

                <div className="card-body">
                    {
                        Notes.mssg && Notes.mssg.length > 0 ? (
                            Notes.mssg.map(note => (
                                <div key={note._id} className="mb-3 border">
                                    <span className="d-flex bd-highlight">
                                        <h2 className="p-2 flex-grow-1 bd-highlight">{note.title}</h2>
                                        <button
                                            type="button"
                                            className="btn-close p-2 bd-highlight"
                                            aria-label="Close"
                                            onClick={() => DeleteNote(note._id)}
                                        >
                                        </button>
                                    </span>
                                    <p className="card-text p-2 flex-grow-1 bd-highlight">{note.description}</p>
                                </div>
                            ))
                        ) : (
                            <p>No notes available</p>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Notes;
