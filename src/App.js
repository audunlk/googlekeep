import React, { useState } from "react";
import Header from './components/Header'
import CreateArea from './components/CreateArea';
import Note from './components/Note';
import Count from './components/Count';

function App(props) {
  const [notes, setNotes] = useState([]);

  function addNote(newNote){
    setNotes((prevValue) => {
      return [...prevValue, newNote];
    });
  }

  function deleteNotes(id){
    setNotes(preValue =>{
      return [...preValue.filter((note, index) => 
      index !== id)];
    })
  }
  return (
    <div className="App">
      <Header />
      <Count count={notes.length === 0? "Add a note": 
      `Showing ${notes.length} Notes`} />
      <CreateArea onAdd={addNote} />
      {notes.map((note,index) =>(
        <Note 
        key={index} 
        id={index} 
        title={note.title} 
        content={note.content}
        onDelete={deleteNotes} 
        />
      ))}
    </div>
  );
}

export default App;