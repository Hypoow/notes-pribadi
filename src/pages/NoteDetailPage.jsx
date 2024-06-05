import React from 'react';
import { RiArchiveLine, RiDeleteBinLine } from 'react-icons/ri';
import { useParams } from 'react-router-dom';
import { showFormattedDate } from '../utils/index';
import { getNote, deleteNote, archiveNote, unarchiveNote } from '../utils/local-data';
import { useNavigate } from 'react-router-dom';
import UnarchiveButton from '../components/UnarchiveButton';
import NavbarPage from '../components/NavbarPage';


const NoteDetailPage = () => {
  const { id } = useParams();
  const note = getNote(id);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteNote(id);
    navigate('/');
  };

  const handleArchive = () => {
    archiveNote(id);
    navigate('/');
  };

  const handleUnarchive = () => {
    unarchiveNote(id);
    navigate('/');
  };

  return (
    <div className="app-container">
      <NavbarPage />
      <main>
        <section className='detail-page'>
          <h3 className='detail-page__title'>{note.title}</h3>
          <p className="note-item__date">{showFormattedDate(note.createdAt)}</p>
          <div className='detail.page__body'>{note.body}</div>
        </section>
        <div className="detail-page__action">
          <button className="action" onClick={handleDelete}>
            <RiDeleteBinLine />
          </button>
          {note.archived ? (
            <button className="action" onClick={handleUnarchive}>
              <UnarchiveButton onClick={handleUnarchive} />
            </button>
          ) : (
            <button className="action" onClick={handleArchive}>
              <RiArchiveLine />
            </button>
          )}
        </div>
      </main>
    </div>
  );
};

export default NoteDetailPage;
