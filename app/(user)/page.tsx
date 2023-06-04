import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import PreviewSuspense from "../../components/PreviewSuspense";
import PreviewBlogList from "../../components/PreviewBlogList";
import BlogList from "../../components/BlogList";
import { draftMode } from "next/headers";

const query = groq`
*[_type=="post"] {
  ...,
  author->,
  categories[]->,
} | order(_createdAt desc)
`;
export const revalidate = 60;

export default async function HomePage() {
  if (draftMode().isEnabled) {
    return;
  }
  const posts = await client.fetch(query);
  return <BlogList posts={posts} />;
}
