import React from 'react';
import PropTypes from 'prop-types';

const NoteDetail = ({ note }) => {
  return (
    <div className="note-detail">
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <p>{note.createdAt}</p>
    </div>
  );
};

NoteDetail.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
  }).isRequired,
};

export default NoteDetail;
