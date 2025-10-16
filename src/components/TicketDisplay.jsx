export default function TicketDisplay({ qrCode }) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = qrCode;
    link.download = "ticket_qrcode.png";
    link.click();
  };

  return (
    <div className="ticket-display" style={{ textAlign: "center", padding: "20px" }}>
      <h3>🎫 Votre ticket est prêt</h3>
      <img
        src={qrCode}
        alt="QR Ticket"
        style={{
          width: "220px",
          border: "2px solid #ddd",
          borderRadius: "10px",
          marginBottom: "15px",
        }}
      />
      <p>Gardez ce QR code pour l’événement.</p>

      <button
        onClick={handleDownload}
        style={{
          backgroundColor: "#0078D7",
          color: "white",
          border: "none",
          borderRadius: "8px",
          padding: "10px 18px",
          fontSize: "16px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#005EA6")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#0078D7")}
      >
        📥 Télécharger le QR Code
      </button>
    </div>
  );
}
