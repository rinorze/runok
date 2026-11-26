import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        textAlign: "center",
        padding: "24px",
        background: "#070a14",
        color: "#fff",
      }}
    >
      <div>
        <p style={{ color: "#4f5bff", fontWeight: 700, letterSpacing: "0.1em" }}>404</p>
        <h1 style={{ fontSize: "2.5rem", margin: "8px 0 12px" }}>Page not found</h1>
        <p style={{ color: "#aab", marginBottom: "24px" }}>This page does not exist or has moved.</p>
        <Link to="/" style={{ color: "#fff", background: "#4f5bff", padding: "12px 22px", textDecoration: "none" }}>
          Back to home
        </Link>
      </div>
    </main>
  );
}
