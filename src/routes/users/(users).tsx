import type { RouteSectionProps } from "@solidjs/router";
import { useParams } from "@solidjs/router";

export default function UsersIndex(props: RouteSectionProps) {
  const params = useParams();

  return (
    <div>
      <h2>/routes/users/(user).tsx $ UserIndex</h2>

      <p>
        location: <code>{JSON.stringify(props.location)}</code>
      </p>
      <p>
        params: <code>{JSON.stringify(params)}</code>
      </p>

      <pre>UsersIndex {">>>"} props.children</pre>
      {props.children}
      <pre>UsersIndex {"<<<"} props.children</pre>
    </div>
  );
}
