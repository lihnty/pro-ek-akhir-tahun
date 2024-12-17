import React from 'react';

export default function WhatsAppChatButton() {
  return (
    <div>
      {/* Tombol WhatsApp */}
      <a
        href="https://wa.me/081933626141" // Ganti dengan nomor WhatsApp Anda
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="whatsapp-logo"
        />
      </a>
    </div> 
  );
}
