import type { RouteSectionProps } from "@solidjs/router";
import Counter from "~/components/Counter";

export default function Home(props: RouteSectionProps) {
  return (
    <main>
      <h1>Hello world!</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://solidjs.com" target="_blank">
          solidjs.com
        </a>{" "}
        to learn how to build Solid apps.
      </p>
      <p>
        location: <code>{JSON.stringify(props.location, null, "\t")}</code>
      </p>
    </main>
  );
}
