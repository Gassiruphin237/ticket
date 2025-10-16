import React, { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { verifyTicket } from "../api";

function Scanner() {
  const [scanResult, setScanResult] = useState(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    // Création du scanner dans la div 'reader'
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: { width: 250, height: 250 },
      fps: 5,
      rememberLastUsedCamera: true,
    });

    const success = async (decodedText) => {
      try {
        // Arrête et clear le scanner pour éviter double lecture
        await scanner.clear();

        // Essaye de parser le QR code
        const parsed = JSON.parse(decodedText);
        const res = await verifyTicket(parsed.id);

        setScanResult(res);
        setStatus(res.message);
      } catch (err) {
        console.error("Erreur de scan :", err);
        setStatus("QR code invalide");
      }
    };

    const error = (err) => {
      // Erreurs de lecture ignorables
      console.warn("Scan error:", err);
    };

    // Démarre le scanner
    scanner.render(success, error);

    // Cleanup si le composant est démonté
    return () => {
      scanner.clear().catch(() => {}); // ignore si scanner pas démarré
    };
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>QR CODE SCANNING</h1>
      {status && <p>{status}</p>}
      {scanResult && scanResult.success && (
        <p style={{ color: "green" }}>
          🎉 Ticket validé pour {scanResult.ticket.name}
        </p>
      )}
      {!scanResult && <div id="reader" style={{ margin: "auto" }}></div>}
    </div>
  );
}
 
export default Scanner;
