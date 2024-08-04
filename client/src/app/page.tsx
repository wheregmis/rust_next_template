"use client";

import { Person } from "@/types";
import Image from "next/image";
import { useState, useEffect } from "react";

const AVATAR_1 =
  "https://res.cloudinary.com/dqse2txyi/image/upload/v1666049372/axum_server/img_avatar_lf92vl.png";

const AVATAR_2 =
  "https://res.cloudinary.com/dqse2txyi/image/upload/v1666049372/axum_server/img_avatar2_erqray.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center">
          Welcome to the AXUM + Next.js + Tailwind CSS Starter
        </h1>
        <p className="text-center">
          Get started by editing <code>pages/index.js</code>
        </p>
        <App />
      </div>
    </main>
  );
}

export function App() {
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/people")
      .then((res) => res.json())
      .then((people: Person[]) => setPeople(people));
  }, []);

  return (
    <div className="app">
      {people.map((person, index) => (
        <div key={index} className="card">
          <img src={index % 2 == 0 ? AVATAR_1 : AVATAR_2} alt="Avatar" />
          <div className="container">
            <h4>
              <b>{person.name}</b>
            </h4>
            <p>Age: {person.age}</p>
            <p>Favourite Food: {person.favourite_food ?? "Unknown"}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
