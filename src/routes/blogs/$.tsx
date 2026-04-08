import { MDXContent } from "@content-collections/mdx/react";
import { mdxComponents } from "@prose-ui/react";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { allBlogs } from "content-collections";

const findPage = (pathArr: string[]) => {
  const path = pathArr && pathArr.length > 0 ? `${pathArr.join("/")}` : `/`;
  return allBlogs.find((blog) => blog._meta.path === path);
};
export const Route = createFileRoute("/blogs/$")({
  component: RouteComponent,
  loader: async ({ params }) => {
    const pathSegments = params._splat
      ? params._splat.split("/").filter(Boolean)
      : [];
    const page = findPage(pathSegments);
    if (!page) {
      throw notFound();
    }
    return { page };
  },
});

function RouteComponent() {
  const { page } = Route.useLoaderData();
  // console.log("Page", page);
  if (!page) {
    throw notFound();
  }
  return (
    <main className="page-wrap px-0 md:px-4 pb-8 mt-20 min-h-dvh">
      <article className="prose-ui">
        <MDXContent code={page.mdx} components={mdxComponents} />
      </article>
    </main>
  );
}
