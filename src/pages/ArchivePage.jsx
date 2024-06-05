import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import NoteList from '../components/NoteList';
import { getArchivedNotes, searchNote, unarchiveNote } from '../utils/local-data';
import { useSearchParams } from 'react-router-dom';
import NavbarPage from '../components/NavbarPage';

const ArchivePage = () => {
  const [notes, setNotes] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const defaultKeyword = searchParams.get('keyword');
    setKeyword(defaultKeyword || '');
  }, [searchParams]);

  useEffect(() => {
    const archivedNotes = getArchivedNotes();
    setNotes(archivedNotes);
  }, []);

  const onKeywordChangeHandler = (newKeyword) => {
    setKeyword(newKeyword);
    setSearchParams({ keyword: newKeyword });
  };

  useEffect(() => {
    const result = searchNote({ keyword });
    const filteredNotes = result.filter((note) => note.archived === true);
    setNotes(filteredNotes);
  }, [keyword]);

  const handleUnarchive = (id) => {
    unarchiveNote(id); 
    const updatedNotes = notes.filter((note) => note.id !== id); 
    setNotes(updatedNotes);
  };

  return (
    <div className="app-container">
      <NavbarPage/>
      <main>
        <h2>Catatan Arsip</h2>
        <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
        <NoteList notes={notes} unarchiveNote={handleUnarchive} /> 
      </main>
    </div>
  );
};

export default ArchivePage;
