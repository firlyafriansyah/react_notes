import React from "react";
import CardNotes from "../../../components/CardNotes/CardNotes";

const ArchivedNotes = ({ notes, onDelete, onArchive, search, archiveNotes }) => {
  return (
    <div className="archive-notes">
      {[...notes].map(note => {
        if (note.archived) {
          if (note.title.toLowerCase().includes(search.toLowerCase())) {
            return <CardNotes key={note.id} {...note} onDelete={onDelete} onArchive={onArchive} textButtonArchive="Move to active" />
          }
        }
        return null;
      })}
      {
        notes.filter(note => note.archived).length === 0 ?
          <p className="empty">You have no note!</p> : notes.filter(note => note.archived).filter(note => note.title.toLowerCase().includes(search.toLowerCase())) <= 0 ?
            <p className="empty">Note not found!</p> : null
      }
    </div>
  )
}

export default ArchivedNotes;
