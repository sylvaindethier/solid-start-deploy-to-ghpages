import type { RouteSectionProps } from "@solidjs/router";
import { useParams } from "@solidjs/router";

export default function UsersIdNameIndex(props: RouteSectionProps) {
  const params = useParams();

  return (
    <div>
      <h2>/routes/users/[id]/(name).tsx $ UsersIdNameIndex</h2>

      <p>
        location: <code>{JSON.stringify(props.location)}</code>
      </p>
      <p>
        params: <code>{JSON.stringify(params)}</code>
      </p>

      <pre>UsersIdNameIndex {">>>"} props.children</pre>
      {props.children}
      <pre>UsersIdNameIndex {"<<<"} props.children</pre>
    </div>
  );
}
