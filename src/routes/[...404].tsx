import { RouteSectionProps } from "@solidjs/router";

export default function NotFound404(props: RouteSectionProps) {
  return (
    <main>
      <h1>There's nothing here</h1>
      <p>
        The requested page{" "}
        <code>{props.location.pathname + props.location.search}</code> was not
        found.
      </p>
    </main>
  );
}
