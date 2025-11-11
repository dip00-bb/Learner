'use client';

import ThemeToggle from "@/app/ThemeToogler/ThemeToggle";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";


const GET_HELLO = gql`
  query {
    hello
  }
`;

export default function Home() {
  const { data, loading, error } = useQuery(GET_HELLO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <main style={{ padding: 20 }} className="text-(--text-black) bg-(--background)">
      <h1>Next.js + GraphQL</h1>
      <p>{data.hello}</p>
      <ThemeToggle/>
    </main>
  );
}
