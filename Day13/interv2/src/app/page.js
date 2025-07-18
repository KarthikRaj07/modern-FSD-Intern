"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import HomePage from "./components/HomePage";
export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;

  if (!session) {
    return (
      <div>
        <p>You are not signed in.</p>
        <button onClick={() => signIn("github")}>Sign in with GitHub</button>
      </div>
    );
  }

  return (
    <div>
      <p>Signed in as {session.user.email}</p>
      <button onClick={() => signOut()}>Sign out</button>
      <HomePage />
    </div>
  );
}