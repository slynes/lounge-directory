export type Lounge = {
  id: string;
  name: string;
  airport: string;
  terminal: string;
  isOpen: boolean;
  amenities: string[];
};

export const LOUNGES_ENDPOINT = "/api/lounges";

export default function App() {
  // TODO: Replace this introduction with your lounge directory.
  return (
    <main className="app-shell">
      <section className="challenge-card" aria-labelledby="challenge-title">
        <p className="eyebrow">Front-End Coding Challenge</p>
        <h1 id="challenge-title">Build a lounge directory</h1>
        <p className="intro">
          Fetch lounge data in React and turn it into a small, usable interface.
          The full brief is in README.md.
        </p>

        <div className="api-callout">
          <span>Mock endpoint</span>
          <code>GET {LOUNGES_ENDPOINT}</code>
        </div>

        <div className="requirements">
          <h2>Core requirements</h2>
          <ol>
            <li>Fetch the lounges when the component loads.</li>
            <li>Handle loading, error, success, and empty states.</li>
            <li>
              Show each lounge name, airport, terminal, status, and amenities.
            </li>
            <li>Allow the user to filter lounges by airport.</li>
          </ol>
        </div>

        <div className="starter-panel">
          <h2>Your implementation goes here</h2>
          <p>
            Start in <code>src/App.tsx</code>. You may change the markup and
            styles however you like.
          </p>
        </div>
      </section>
    </main>
  );
}
