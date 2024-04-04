import Avatar from "./avatar";

import { type Author } from "@/interfaces/author";
import { truncate } from "@/libs/utils/stringUtils";
import Link from "next/link";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <section className="lg:grid lg:grid-cols-6 md:w-full  lg:gap-4  bg-base overflow-hidden my-16 bg-neutral-200">
      <div className="container px-4 mx-auto lg:col-span-3 md:w-full ">
        <div
          className="px-12 pt-12 pb-9 md:max-w-xl rounded-2xl"
          style={{ backdropFilter: "blur(50px)" }}
        >
          <p className="mb-7 font-sans max-w-max px-3 py-1.5 text-sm text-slate-800 font-semibold uppercase border border-gray-700 rounded-md">
            {slug}
          </p>
          <h2 className="mb-4 text-3xl md:text-3xl text-slate-800 font-bold font-heading tracking-px-n leading-tight">
            {title}
          </h2>

          <p className="text-lg leading-relaxed mb-4 text-slate-900">
            {truncate(excerpt, 200)}
          </p>
          <div className="mb-4 md:mb-0 text-l text-slate-900">
            <DateFormatter dateString={date} />
          </div>
          <Link
            as={`/blog/${slug}`}
            href="/blog/[slug]"
            className="inline-flex flex-wrap underline items-center text-primary  hover:text-secondary my-6"
          >
            <span className="mr-2 font-semibold leading-normal">
              Read Full Article
            </span>
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 3.75L16.25 9M16.25 9L11 14.25M16.25 9L2.75 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </Link>
          <div className="text-slate-700 text-l">
            <Avatar name={author.name} picture={author.picture} />
          </div>
        </div>
      </div>
      <div
        className="lg:col-span-3 md:w-full bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${coverImage})` }}
      ></div>
    </section>
  )
}
