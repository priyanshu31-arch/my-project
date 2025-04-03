import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      const initialNotes = response.data.slice(0, 5);
      const formattedNotes = initialNotes.map((note) => ({
        id: note.id,
        title: note.title,
        content: note.body,
      }));
      setNotes(formattedNotes);
    };
 
    fetchNotes();
  }, []);

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  return (
    <div>
      <h1>Home</h1>
      {notes.length > 0 ? (
        notes.map((note) => (
          <div key={note.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <button onClick={() => deleteNote(note.id)}>Delete</button>
          </div>
        ))
      ) : (
        <p>No notes available. Add some!</p>
      )}
    </div>
  );
}

export default Home;