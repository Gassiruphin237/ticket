import { useState } from "react";
import { registerUser } from "../api";
import TicketDisplay from "./TicketDisplay";

export default function RegistrationForm() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [qrCode, setQrCode] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await registerUser(form);
    if (data.success) setQrCode(data.qrCode);
  };

  return (
    <div className="form-container">
      <h2>Inscription à l'événement</h2>
      {!qrCode ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nom complet"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <button type="submit">S'inscrire</button>
        </form>
      ) : (
        <TicketDisplay qrCode={qrCode} />
      )}
    </div>
  );
}
