import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "./styles.css";

const loungeData = [
  {
    id: "lounge-1",
    name: "The Centurion Lounge",
    airport: "JFK",
    terminal: "Terminal 4",
    isOpen: true,
    amenities: ["Wi-Fi", "Food", "Showers"],
  },
  {
    id: "lounge-2",
    name: "Sky Club",
    airport: "JFK",
    terminal: "Terminal 2",
    isOpen: false,
    amenities: ["Wi-Fi", "Food"],
  },
  {
    id: "lounge-3",
    name: "Airspace Lounge",
    airport: "SAN",
    terminal: "Terminal 2",
    isOpen: true,
    amenities: ["Wi-Fi", "Drinks"],
  },
  {
    id: "lounge-4",
    name: "Maple Leaf Lounge",
    airport: "LAX",
    terminal: "Terminal 6",
    isOpen: true,
    amenities: ["Wi-Fi", "Food", "Family room"],
  },
  {
    id: "lounge-5",
    name: "Admirals Club",
    airport: "LAX",
    terminal: "Terminal 4",
    isOpen: false,
    amenities: ["Wi-Fi", "Business center"],
  },
  {
    id: "lounge-6",
    name: "Escape Lounge",
    airport: "PHX",
    terminal: "Terminal 3",
    isOpen: true,
    amenities: ["Wi-Fi", "Food", "Drinks"],
  },
];

const nativeFetch = window.fetch.bind(window);

window.fetch = (async (input: RequestInfo | URL, init?: RequestInit) => {
  const requestedUrl =
    typeof input === "string"
      ? input
      : input instanceof URL
      ? input.href
      : input.url;
  const url = new URL(requestedUrl, window.location.origin);

  if (url.pathname !== "/api/lounges") {
    return nativeFetch(input, init);
  }

  await new Promise((resolve) => window.setTimeout(resolve, 700));

  if (url.searchParams.get("simulateError") === "true") {
    return new Response(
      JSON.stringify({
        message: "The lounge service is temporarily unavailable.",
      }),
      {
        status: 503,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  return new Response(JSON.stringify(loungeData), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}) as typeof window.fetch;

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
