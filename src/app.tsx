import { MetaProvider, Title } from "@solidjs/meta";
import { A, Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";

const Nav = () => (
  <nav class="top">
    <ul>
      <li>
        <A href="/" end={true}>
          Home
        </A>
      </li>

      <li>
        <A href="/users">/users</A>
      </li>

      <li>
        <A href="/users/3">/users/3</A>
      </li>

      <li>
        <A href="/users/foo/bar">/users/foo/bar</A>
      </li>

      <li>
        <A href="/users/projects">/users/projects</A>
      </li>

      {/* *404 NotFound */}
      <li>
        <A href="/not-found">Not Found</A>
      </li>
    </ul>
  </nav>
);

export default function App() {
  return (
    <Router
      base={import.meta.env.SERVER_BASE_URL}
      root={(props) => (
        <MetaProvider>
          <Title>SolidStart - with Vitest</Title>
          <Nav />
          <Suspense>{props.children}</Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
