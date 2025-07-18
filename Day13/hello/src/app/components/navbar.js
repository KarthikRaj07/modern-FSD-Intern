"use client";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem", background: "#2563eb" }}>
      <span style={{ color: "#fff", fontWeight: "bold", fontSize: "1.2rem" }}>Internv2</span>
      {session ? (
        <button
          onClick={() => signOut()}
          style={{ padding: "0.5rem 1rem", background: "#fff", color: "#2563eb", border: "none", borderRadius: "4px", cursor: "pointer", fontWeight: "bold" }}
        >
          Sign Out
        </button>
      ) : null}
    </nav>
  );
}
