import React from "react";
import ActiveNotes from "./ActiveNotes/ActiveNotes";
import ArchivedNotes from "./ArchivedNotes/ArchivedNotes";
import SearchField from "./SearchField/SearchField";

class NotesSection extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchValue: '',
      activeNotes: this.props.notes.filter(note => note.archived === false),
      archiveNotes: this.props.notes.filter(note => note.archived === true),
    }

    this.onChangeSearchValueHandler = this.onChangeSearchValueHandler.bind(this)
  }

  onChangeSearchValueHandler(value) {
    this.setState((prevState) => {
      return {
        ...prevState,
        searchValue: value
      }
    })
  }

  render() {
    return (
      <div className="note-section">
        <SearchField onSearch={this.onChangeSearchValueHandler} />
        <div className="note-section__wrapper">
          <div className="note note-active__wrapper">
            <p className="note-section__title">Active Notes.</p>
            <ActiveNotes notes={this.props.notes} onDelete={this.props.onDelete} onArchive={this.props.onArchive} search={this.state.searchValue} activeNotes={this.state.activeNotes} />
          </div>
          <div className="note note-archive__wrapper">
            <p className="note-section__title">Archived Notes.</p>
            <ArchivedNotes notes={this.props.notes} onDelete={this.props.onDelete} onArchive={this.props.onArchive} search={this.state.searchValue} archiveNotes={this.state.archiveNotes}  />
          </div>
        </div>
      </div>
    )
  }
  
}

export default NotesSection;
