import type { RouteSectionProps } from "@solidjs/router";
import { useParams } from "@solidjs/router";

export default function UsersLayout(props: RouteSectionProps) {
  const params = useParams();

  return (
    <main>
      <h1>/routes/users.tsx $ UsersLayout</h1>

      <p>
        location: <code>{JSON.stringify(props.location)}</code>
      </p>
      <p>
        params: <code>{JSON.stringify(params)}</code>
      </p>

      <pre>UsersLayout {">>>"} props.children</pre>
      {props.children}
      <pre>UsersLayout {"<<<"} props.children</pre>
    </main>
  );
}
