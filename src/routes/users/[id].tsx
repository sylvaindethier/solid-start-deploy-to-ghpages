import type { RouteSectionProps } from "@solidjs/router";
import { useParams } from "@solidjs/router";

export default function UsersId(props: RouteSectionProps) {
  const params = useParams();

  return (
    <div>
      <h2>/routes/users/[id].tsx $ UsersId</h2>

      <p>
        location: <code>{JSON.stringify(props.location)}</code>
      </p>
      <p>
        params: <code>{JSON.stringify(params)}</code>
      </p>

      <pre>UsersId {">>>"} props.children</pre>
      {props.children}
      <pre>UsersId{"<<<"} props.children</pre>
    </div>
  );
}
