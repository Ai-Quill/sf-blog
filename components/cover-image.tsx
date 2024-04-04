import cn from "classnames"
import Link from "next/link"
import Image from "next/image"

type Props = {
  title: string
  src: string
  slug?: string
}

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <div className="h-72 overflow-hidden">
      <Image
        src={src}
        alt={`Cover Image for ${title}`}
        className={cn("shadow-sm rounded-sm", {
          "hover:shadow-lg transition-shadow duration-200": slug,
        })}
        layout="responsive"
        objectFit="cover"
        width={1000} // This value doesn't matter as long as the ratio between width and height is kept.
        height={600}
      />
    </div>
  )

  return (
    <div className="grid grid-rows-1 sm:mx-0">
      {slug ? (
        <Link as={`/blog/${slug}`} href="/blog/[slug]" aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
      <div className="row-start-1 row-end-2">
        {/* Your title and text here */}
      </div>
    </div>
  )
}

export default CoverImage
