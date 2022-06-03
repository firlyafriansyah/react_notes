import React from "react";
import { showFormattedDate } from "../../utils";

const CardNotes = ({id, title, body, createdAt, onDelete,  onArchive, textButtonArchive}) => {
  return (
    <div className="card-wrapper">
      <div className="card-wrapper__content">
        <h3 className="card-content__title">{ title }</h3>
        <p className="card-content__date">{ showFormattedDate(createdAt) }</p>
        <p className="card-content__body">{ body }</p>
      </div>
      <div className="card-wrapper__button">
        <button className="card-button card-button__archive" type="button" onClick={() => onArchive(id)}>{textButtonArchive}</button>
        <button className="card-button card-button__delete" type="button" onClick={() => onDelete(id)}>Delete</button>
      </div>
    </div>
  )
}

export default CardNotes;