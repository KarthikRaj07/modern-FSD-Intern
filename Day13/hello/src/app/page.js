"use client";

import { signIn, useSession } from "next-auth/react";
import Navbar from "./components/navbar";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;

  if (!session) {
    return (
      <div>
        <Navbar />
        <main style={{ padding: "2rem" }}>
          <p>You are not signed in.</p>
          <button onClick={() => signIn("github")}>Sign in with GitHub</button>
        </main>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <main style={{ padding: "2rem" }}>
        <p>Signed in as {session.user.email}</p>
        <p>Welcome to the protected homepage!</p>
      </main>
    </div>
  );
}