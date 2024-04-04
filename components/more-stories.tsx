import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";
import {truncate} from "@/libs/utils/stringUtils";

type Props = {
  posts: Post[];
};

export function MoreStories({ posts }: Props) {
  return (
    <section>
      <h2 className="mb-8 text-4xl md:text-4xl font-bold tracking-tighter leading-tight underline-offset-auto">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={truncate(post.excerpt,200)}
          />
        ))}
      </div>
    </section>
  );
}
