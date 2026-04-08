import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blogs/")({
  head: () => ({
    meta: [
      {
        title: "Blogs | Subash Thatheuse",
      },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/blog"!</div>;
}
