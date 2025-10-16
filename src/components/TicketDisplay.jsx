import React from "react";
import "./TicketDisplay.css";

export default function TicketDisplay({ qrCode, name, theme, code, date }) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = qrCode;
    link.download = "ticket_qrcode.png";
    link.click();
  };

  return (
    <div className="ticketContainer">
      <div className="ticket">
        <div className="ticketTitle">Mariage Juliette & Pierre</div>
        <hr />
        <div className="ticketDetail">
          <div className="qrcode">
            <img src={qrCode} alt="QR Code" />
          </div>
          <div className="detail">
            <div>Nom : {name || "Invité(e)"}</div>
            <div>Thème : {theme || "Beige/orange"}</div>
          </div>
        </div>

        <div className="ticketRip">
          <div className="circleLeft"></div>
          <div className="ripLine"></div>
          <div className="circleRight"></div>
        </div>

        <div className="ticketSubDetail">
          <div className="code">{code || "LO-2314XXX"}</div>
          <div className="date">{date || "12 Janvier 2026"}</div>
        </div>
      </div>

      <div className="ticketShadow"></div>

      <button className="downloadBtn" onClick={handleDownload}>
        Télécharger le Billet
      </button>
    </div>
  );
}
