import React from "react";
import ErrorAlert from "../../components/ErrorAlert/ErrorAlert";

class FormSection extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      body: '',
      errorMessage: '',
      counterInput: 50,
    }

    this.onTitleNotesChangeHandler = this.onTitleNotesChangeHandler.bind(this)
    this.onBodyNotesChangeHandler = this.onBodyNotesChangeHandler.bind(this)
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this)
  }

  onTitleNotesChangeHandler = e => {
    const titleArray = e.target.value.split('');

    if (titleArray.length <= 50) {
      this.setState((prevState) => {
        return {
          ...prevState,
          counterInput: 50 - titleArray.length
        }
      })
      this.setState((prevState) => {
        return {
          ...prevState,
          title: e.target.value
        }
      })
    }
    
    if (titleArray.length >= 50) {
      this.setState((prevState) => {
        return {
          ...prevState,
          errorMessage: 'Title note length can\'t greater than 50 character!'
        }
      })
    } else {
      this.setState((prevState) => {
        return {
          ...prevState,
          errorMessage: ''
        }
      })
    }
  }

  onBodyNotesChangeHandler = e => {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: e.target.value
      }
    })
    this.setState((prevState) => {
      return {
        ...prevState,
        errorMessage: ''
      }
    })
  }

  onSubmitEventHandler = e => {
    e.preventDefault();
    const { title, body } = this.state;

    if (title === '') {
      this.setState((prevState) => {
        return {
          ...prevState,
          errorMessage: 'Please enter note title!'
        }
      })
    } else if (body === '') {
      this.setState((prevState) => {
        return {
          ...prevState,
          errorMessage: 'Please enter note body!'
        }
      })
    } else {
      this.props.addNotes(this.state)
      this.setState((prevState) => {
        return {
          ...prevState,
          title: '',
          body: '',
          errorMessage: '',
          counterInput: 50
        }
      })
    }
    
  }

  render() {
    return (
      <div className="form-section">
        <div className="form-section__wrapper">
          <h1 className="form-section__title">Create Notes.</h1>
          <ErrorAlert message={this.state.errorMessage} />
          <form className="form-section__form" onSubmit={this.onSubmitEventHandler}>
            <p className="form-input__counter">Limit Char: {this.state.counterInput}</p>
            <input className="form-input form-input__title" type="text" placeholder="Enter note title . . ." value={this.state.title} onChange={this.onTitleNotesChangeHandler} />
            <textarea className="form-input form-input__body" placeholder="Enter note . . ." value={this.state.body} onChange={this.onBodyNotesChangeHandler} />
            <button className="add-notes__button" type="submit">Add Notes</button>
          </form>
        </div>
      </div>
    )
  }
}

export default FormSection;
