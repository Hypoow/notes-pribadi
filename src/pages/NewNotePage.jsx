import React from 'react';
import NoteInput from '../components/NoteInput';
import NavbarPage from '../components/NavbarPage';
import '../styles/style.css';

const NewNotePage = () => {
  return (
    <div className="app-container">
      <NavbarPage />
      <main>
        <NoteInput />
      </main>
    </div>
  );
};

export default NewNotePage;
