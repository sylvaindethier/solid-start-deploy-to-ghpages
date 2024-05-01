import type { RouteSectionProps } from "@solidjs/router";
import { useParams } from "@solidjs/router";

export default function UsersProjects(props: RouteSectionProps) {
  const params = useParams();

  return (
    <div>
      <h2>/routes/users/projects.tsx $ UsersProjects</h2>

      <p>
        location: <code>{JSON.stringify(props.location)}</code>
      </p>
      <p>
        params: <code>{JSON.stringify(params)}</code>
      </p>

      <pre>UsersProjects {">>>"} props.children</pre>
      {props.children}
      <pre>UsersProjects {"<<<"} props.children</pre>
    </div>
  );
}
