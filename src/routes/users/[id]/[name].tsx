import type { RouteSectionProps } from "@solidjs/router";
import { useParams } from "@solidjs/router";

export default function UsersIdName(props: RouteSectionProps) {
  const params = useParams();

  return (
    <div>
      <h2>/routes/users/[id]/[name].tsx $ UserIdName</h2>

      <p>
        location: <code>{JSON.stringify(props.location)}</code>
      </p>
      <p>
        params: <code>{JSON.stringify(params)}</code>
      </p>

      <pre>UsersIdName {">>>"} props.children</pre>
      {props.children}
      <pre>UsersIdName {"<<<"} props.children</pre>
    </div>
  );
}
