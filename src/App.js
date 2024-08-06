
import './App.css';
import React from 'react'
import Navbar from './components/Navbar';

import Notes from './components/Notes';
import NotesContextProvider from './context/notes/NotesContextProvider'
import UserContextProvider from './context/notes/UserContextProvider'
import NoteModel from './components/NoteModel';
import Login from './components/Login';


function App() {
  return (
    <div>
      <UserContextProvider>
        <NotesContextProvider>
          <Navbar />
          <Login />
          <NoteModel />
          <Notes />
        </NotesContextProvider>
      </UserContextProvider>

    </div>

  );
}

export default App;


