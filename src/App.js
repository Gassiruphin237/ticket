import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import RegistrationForm from "./components/RegistrationForm";
import Scanner from "./components/Scanner";
import Test from "./components/Test";

export default function App() {
  return (
    <BrowserRouter>
      {/* <nav style={{ marginBottom: 20 }}>
        <Link to="/">Inscription</Link> | <Link to="/scanner">Scanner</Link>
      </nav> */}

      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/scanner" element={<Scanner />} />
          <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}
