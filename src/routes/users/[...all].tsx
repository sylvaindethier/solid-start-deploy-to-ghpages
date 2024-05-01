import type { RouteSectionProps } from "@solidjs/router";
import { useParams } from "@solidjs/router";

export default function UsersCatchAll(props: RouteSectionProps) {
  const params = useParams();

  return (
    <div>
      <h2>/routes/users/[...all].tsx $ UsersCatchAll</h2>

      <p>
        location: <code>{JSON.stringify(props.location)}</code>
      </p>
      <p>
        params: <code>{JSON.stringify(params)}</code>
      </p>

      <pre>UsersCatchAll {">>>"} props.children</pre>
      {props.children}
      <pre>UsersCatchAll {"<<<"} props.children</pre>
    </div>
  );
}
