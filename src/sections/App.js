import React from "react";
import { getInitialData } from "../utils";
import FormSection from "./FormSection/FormSection";
import NotesSection from "./NotesSection/NotesSection";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    }

    this.onAddNotesHandler = this.onAddNotesHandler.bind(this)
    this.onDaleteNotesHandler = this.onDaleteNotesHandler.bind(this)
    this.onArchiveNotesHandler = this.onArchiveNotesHandler.bind(this)
  }

  onArchiveNotesHandler(id) {
    const checkIndexById = this.state.notes.findIndex((item => item.id === id))
    const archived = this.state.notes[checkIndexById].archived
    const notes = this.state.notes.map(note => note.id === id ? {...note, archived: !archived} : note)
    this.setState({notes})
  }

  onDaleteNotesHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id)
    this.setState({notes})
  }

  onAddNotesHandler({ title, body }) {
    this.setState(prevState => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: +new Date(),
            archived: false,
          }
        ]
      }
    })
  }

  render() {
    return (
      <div className="app">
        <h1 className="title">Perfect Notes</h1>
        <FormSection  addNotes={this.onAddNotesHandler} />
        <NotesSection notes={this.state.notes} onDelete={this.onDaleteNotesHandler} onArchive={this.onArchiveNotesHandler} />
      </div>
    )
}
}

export default App;