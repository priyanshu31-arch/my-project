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
      <div className="flex flex-wrap gap-5"> 
      {notes.length > 0 ? (
        notes.map((note) => (
          <div key={note.id} className='bg-blue-400 justify-center w-[350px] p-5 rounded-lg shadow-lg border flex  flex-wrap ' >
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <button onClick={() => deleteNote(note.id)}>Delete</button>
          </div>
        ))
      ) : (
        <p>No notes available. Add some!</p>
      )}</div>
    </div>
  );
}

export default Home;