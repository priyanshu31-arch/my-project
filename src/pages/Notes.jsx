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
    <div className="justify-between m-24 border-spacing-1 bg-lime-300">
      <h1 className="p-4 ml-56 underline">Add a Note</h1>
      <form onSubmit={handleSubmit}>
        <div className="p+4 ml-36">
          <label>Title: </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="p-4 ml-32">
          <label>Content: </label>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></input>
        </div>
        <button type="submit" className="m-7 border-spacing-1 p-1 bg-blue-300 ml-56">Add Note</button>
      </form>
    </div>
  );
}

export default Note;