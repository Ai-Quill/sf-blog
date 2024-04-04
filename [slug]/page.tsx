import { Metadata } from "next"
import { notFound } from "next/navigation"
import { getAllPosts, getPostBySlug } from "@/libs/posts"
import markdownToHtml from "@/libs/markdownToHtml"
import Alert from "@/app/(marketing)/blog/components/alert"
import Container from "@/app/(marketing)/blog/components/container"
import { PostBody } from "@/app/(marketing)/blog/components/post-body"
import { PostHeader } from "@/app/(marketing)/blog/components/post-header"
import { getSEOTags } from "@/libs/seo"
import Link from "next/link"
import Script from "next/script"
import config from "@/config"

export default async function Post({ params }: Params) {
  console.log("params", params.slug)
  const post = getPostBySlug(params.slug)

  if (!post) {
    return notFound()
  }

  const content = await markdownToHtml(post.content || "")

  return (
    <main>
      {/* SCHEMA JSON-LD MARKUP FOR GOOGLE */}
      <Script
        type="application/ld+json"
        id={`json-ld-article-${post.slug}`}
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://${config.domainName}/blog/${post.slug}`,
            },
            name: post.title,
            headline: post.title,
            description: post.excerpt,
            image: `https://${config.domainName}${post.ogImage.url}`,
            // datePublished: post.,
            // dateModified: post.publishedAt,
            author: {
              "@type": "Person",
              name: post.author.name,
            },
          }),
        }}
      />
      {/* <Alert preview={post.preview} /> */}
      <Container>
        {/* GO BACK LINK */}
        <div>
          <Link
            href="/blog"
            className="link !no-underline text-base-content/80 hover:text-base-content inline-flex items-center gap-1"
            title="Back to Blog"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
                clipRule="evenodd"
              />
            </svg>
            Back to Blog
          </Link>
        </div>
        <article className="mb-24">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          <PostBody content={content} />
        </article>
      </Container>
    </main>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return notFound()
  }

  const title = `${post.title} | WebScrape.AI`

  return getSEOTags({
    title,
    description: post.excerpt,
    canonicalUrlRelative: `/blog/${post.slug}`,
    extraTags: {
      openGraph: {
        title,
        description: post.excerpt,
        url: `/blog/${post.slug}`,
        images: [
          {
            url: post.coverImage,
            width: 1200,
            height: 630,
          },
        ],
        locale: "en_US",
        type: "article",
        article: {
          publishedTime: post.date,
          modifiedTime: post.date,
          authors: [post.author.name],
          //tags: post.tags
        },
      },
    },
  })
}

export async function generateStaticParams() {
  const posts = getAllPosts()

  return posts.map((post: { slug: any }) => ({
    slug: post.slug,
  }))
}
