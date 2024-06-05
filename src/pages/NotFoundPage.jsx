import React from 'react';
import NavbarPage from '../components/NavbarPage';

const NotFoundPage = () => {
  return (
    <div className="app-container">
      <NavbarPage />
      <main>
        <div>
          <h1>Error 404: Halaman tidak ditemukan</h1>
          <p>Maaf, halaman yang Anda cari tidak dapat ditemukan.</p>
        </div>
      </main>
    </div>
  );
};

export default NotFoundPage;
