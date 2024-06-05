import React from 'react';
import Note from './Note';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom'; 

const NoteList = ({ notes }) => { 

  const navigate = useNavigate(); 

  const handleTitleClick = (noteId) => {
    navigate(`/notes/${noteId}`); 
  };

  return (
    <div className="notes-list">
      {notes.length > 0 ? (
        notes.map(note => (
          <Note
            key={note.id}
            note={note}
            onTitleClick={() => handleTitleClick(note.id)} 
          />
        ))
      ) : (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      )}
    </div>
  );
};

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
  })).isRequired,
};

export default NoteList;
