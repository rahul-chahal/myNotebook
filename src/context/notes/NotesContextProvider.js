import NotesContext from './NotesContext';
import React, { useState, useEffect } from 'react';
import { useContext } from "react";
import UserContext from "./UserContext";

// eyJhbGciOiJIUzI1NiJ9.NjY3M2IyNmFlNmEzYjY4YjViZDhhY2Qy.K0QusbxYODlbNDm9PiLgFnm6ic5lL8TbOuTmk2FUkIg

const NotesContextProvider = (props) => {
  // Get notes API
  const [Notes, setNotes] = useState(null)
  const { authToken } = useContext(UserContext);
  
  // Function to fetch notes from the DB
  const fetchData = async () => {
    let headers = {
      'accept': '*/*',
      'authtokenheader': authToken
    };
    let url = 'http://localhost:3000/api/note/get_note';
    try {
      let response = await fetch(url, {
        method: 'GET',
        headers: headers
      });
      let parsedData = await response.json();
      setNotes(parsedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    if (authToken) { // Only fetch data if authToken is available
      fetchData();
    }
  }, [authToken]); // Dependency array includes authToken

  // api for deleting notes
  const DeleteNote = async (id) => {
    try {
      let url = `http://localhost:3000/api/note/delete_note`;
      let headers = {
        'authtokenheader': authToken,
        'note_id': id
      };

      await fetch(url, {
        method: 'DELETE',
        headers: headers
      });
      // refresh data after deleting notes
      fetchData();
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  }


  // api to add note in db
  const AddNote = async (body) => {
    
    let headers = {
      'Accept': '*/*',
      'Content-Type': 'application/json',
      'authtokenheader': authToken
    };
    let url = 'http://localhost:3000/api/note/add_note';
    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
      });

      if (!response.ok) {
        // If the response status is not OK, throw an error
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      let newNote = await response.json();
      // setNotes(newNote);
      // fetch notes again
      fetchData();

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };



  return (
    <NotesContext.Provider value={{ Notes, DeleteNote, AddNote}}>
      {props.children}
    </NotesContext.Provider>
  );
};

export default NotesContextProvider;
