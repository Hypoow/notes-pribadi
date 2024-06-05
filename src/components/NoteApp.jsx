import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RiAddLine } from 'react-icons/ri';
import { getAllNotes, getArchivedNotes } from '../utils/local-data';
import NoteList from './NoteList';
import SearchBar from './SearchBar';
import NavbarPage from './NavbarPage';
import { LocaleConsumer } from '../contexts/LocaleContext';


const NoteApp = () => {
    const allNotes = getAllNotes();
    const [searchKeyword, setSearchKeyword] = useState('');
    const location = useLocation();

    const handleKeywordChange = (keyword) => {
        setSearchKeyword(keyword);
    };

    const filteredNotes = allNotes.filter((note) =>
        note.title.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    let displayedNotes = [];

    if (location.pathname !== '/archives') {
        displayedNotes = filteredNotes.filter((note) => !note.archived);
    } else {
        displayedNotes = getArchivedNotes().filter((note) =>
            note.title.toLowerCase().includes(searchKeyword.toLowerCase())
        );
    }

    return (
        <div className="app-container">
            <NavbarPage/>
            <main>
                <div className="note-app__body">
                    <h2>{location.pathname === '/archives' ? 'Catatan Arsip' : 'Catatan Aktif'}</h2>
                    <SearchBar keyword={searchKeyword} keywordChange={handleKeywordChange} />
                    <NoteList notes={displayedNotes} />
                </div>
                <div className="add-note-button">
                    <Link to="/notes/new" className="add-note-button__link">
                        <RiAddLine className="add-note-button__icon" />
                    </Link>
                </div>
            </main>
        </div>
    );
};

export default NoteApp;
