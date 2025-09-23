import React, { useState, useEffect, useContext } from "react";
import UserClass from "./UserClass.jsx";
import UserContext from "../utils/userContext.js";

export default function About() {
  const { loggedInUser, setUserInfo } = useContext(UserContext);

  const [status, setStatus] = useState("idle");

  useEffect(() => {
    setStatus("loading");
    fetch("/api/profile/status")
      .then((res) => res.json())
      .then((data) => setStatus(data.status))
      .catch(() => setStatus("error"));
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="text-4xl font-bold text-gray-900">About Me</h1>
        <button
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
onClick={() =>
  setUserInfo((prev) => (prev === "Guest" ? "Ayoszdeep" : "Guest"))
}
        >
          Switch User
        </button>
      </header>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Profile Status</h2>
        
      </section>

      <section>
        <UserClass username="ayoszdeep" />
      </section>

      <footer className="text-gray-600">
        Currently logged in as:{" "}
        <span className="font-medium text-gray-800">{loggedInUser}</span>
      </footer>
    </div>
  );
}
