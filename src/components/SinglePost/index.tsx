import { findPostBySlugCached } from "@/lib/post/queries";
import { Suspense } from "react";
import { SpinLoader } from "../SpinLoader";

type SinglePostProps = {
  slug: string;
};

export async function SinglePost({ slug }: SinglePostProps) {
  const post = await findPostBySlugCached(slug);

  return (
    <div>
      <p>{post.content}</p>
    </div>
  )
}
