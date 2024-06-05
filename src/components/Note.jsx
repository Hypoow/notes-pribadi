import React from 'react';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils/index';

const Note = ({ note, onTitleClick }) => { 

  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title" style={{ cursor: 'pointer', textDecoration: 'underline' }} onClick={() => onTitleClick(note.id)}>{note.title}</h3>
        <p className="note-item__date">{showFormattedDate(note.createdAt)}</p>
        <p className="note-item__body">{note.body}</p>
      </div>
    </div>
  );
};

Note.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
  }).isRequired,
  onTitleClick: PropTypes.func.isRequired,
};

export default Note;
