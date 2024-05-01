import type { RouteSectionProps } from "@solidjs/router";
import { useParams } from "@solidjs/router";

export default function UsersOptionalId(props: RouteSectionProps) {
  const params = useParams();

  return (
    <div>
      <h2>/routes/users/[[id]].tsx $ UsersOptionalId</h2>

      <p>
        location: <code>{JSON.stringify(props.location)}</code>
      </p>
      <p>
        params: <code>{JSON.stringify(params)}</code>
      </p>

      <pre>UsersOptionalId {">>>"} props.children</pre>
      {props.children}
      <pre>UsersOptionalId {"<<<"} props.children</pre>
    </div>
  );
}
