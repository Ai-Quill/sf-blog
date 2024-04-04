import { type Author } from "@/interfaces/author"
import Link from "next/link"
import Avatar from "./avatar"
import CoverImage from "./cover-image"
import DateFormatter from "./date-formatter"

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-xl mb-3 leading-snug">
        <Link
          as={`/blog/${slug}`}
          href="/blog/[slug]"
          className="hover:underline hover:text-secondary block h-12 leading-6"
        >
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4 text-gray-50 italic">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-l leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  )
}
