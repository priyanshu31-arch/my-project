import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Note({ setNotes }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      id: Date.now(),
      title,
      content,
    };
    setNotes((prevNotes) => [...prevNotes, newNote]);
    navigate("/"); 
  };

  return (
    <div>
      <h1>Add a Note</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title: </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Content: </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
}

export default Note;