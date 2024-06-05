import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NoteForm = ({ onSubmit, onChange, values }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;
    onAdd({
      id: Date.now(),
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false
    });
    setTitle('');
    setBody('');
  };

  return (
    <form className="note-input" onSubmit={handleSubmit}>
      <input
        type="text"
        className="note-input__title"
        placeholder="Judul"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        className="note-input__body"
        placeholder="Catatan"
        value={body}
        onChange={e => setBody(e.target.value)}
      ></textarea>
      <button className="note-input__button" type="submit">
        Tambah Catatan
      </button>
    </form>
  );
};

NoteForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
};

export default NoteForm;