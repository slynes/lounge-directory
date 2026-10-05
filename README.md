# Front-End Coding Challenge: Lounge Directory

**Suggested timebox:** 45–60 minutes

## Your task

Build a React lounge directory in `src/App.tsx`. Fetch the supplied data and turn it into a clear, usable interface.

The goal is not visual perfection. We are interested in how you model request state, structure React code, and make sensible UI decisions.

## API

A local mock endpoint is already configured:

```text
GET /api/lounges
```

It returns an array shaped like this:

```ts
type Lounge = {
  id: string;
  name: string;
  airport: string;
  terminal: string;
  isOpen: boolean;
  amenities: string[];
};
```

Example record:

```json
{
  "id": "lounge-1",
  "name": "The Centurion Lounge",
  "airport": "JFK",
  "terminal": "Terminal 4",
  "isOpen": true,
  "amenities": ["Wi-Fi", "Food", "Showers"]
}
```

The endpoint intentionally waits briefly before responding so the loading state can be observed.

## Core requirements

1. Fetch the lounges when the component loads.
2. Show a loading state while the request is in progress.
3. Show a helpful error state if the request fails or returns an unsuccessful HTTP status.
4. Render each lounge name, airport, terminal, open or closed status, and amenities.
5. Let the user filter the results by airport.
6. Show an empty state when no lounges match the selected airport.

## Error testing

To exercise a failure response, temporarily request:

```text
/api/lounges?simulateError=true
```

## Guidelines

- You may change any markup or CSS in `src/App.tsx` and `src/styles.css`.
- You may create additional components or hooks if they improve the solution.
- Use semantic HTML and accessible labels where practical.
- Please talk through your decisions and tradeoffs as you work.

## Optional extensions

If time remains, choose any of the following:

- Add an “open lounges only” control.
- Add a retry action to the error state.
- Sort lounges alphabetically.
- Make filtering searchable and case-insensitive.
- Extract reusable components or a custom data-fetching hook.
