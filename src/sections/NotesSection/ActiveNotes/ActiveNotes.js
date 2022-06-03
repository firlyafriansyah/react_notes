import React from "react";
import CardNotes from "../../../components/CardNotes/CardNotes";

const ActiveNotes = ({ notes, onDelete, onArchive, search, activeNotes }) => {
  console.log(activeNotes.length);
  return (
    <div className="active-notes">
      {[...notes].reverse().map(note => {
        if (!note.archived) {
          if (note.title.toLowerCase().includes(search.toLowerCase())) {
            return <CardNotes key={note.id} {...note} onDelete={onDelete} onArchive={onArchive} textButtonArchive="Archive" />
          }
        }
        return null
      })}
      {
        notes.filter(note => !note.archived).length === 0 ?
          <p className="empty">You have no note!</p> : notes.filter(note => !note.archived).filter(note => note.title.toLowerCase().includes(search.toLowerCase())) <= 0 ?
            <p className="empty">Note not found!</p> : null
      }
    </div>
  )
}

export default ActiveNotes;
