import React from 'react';
import PropTypes from 'prop-types';
import Note from './Note';

const Archive = ({ notes }) => {
    return (
        <div className="archive">
            {notes.length > 0 ? (
                notes.map(note => (
                    <Note
                        key={note.id}
                        note={note}
                    />
                ))
            ) : (
                <p className="archive__empty-message">Tidak ada catatan yang diarsipkan.</p>
            )}
        </div>
    );
};

Archive.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        archived: PropTypes.bool.isRequired,
    })).isRequired,
};

export default Archive;
