import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import ButtonLink from "@/components/ui/ButtonLink";

function BlogCard({
  id,
  title,
  date,
  description,
  category,
  image,
  author,
  author_img,
}) {
  return (
    <article
      className="max-w-[330px] bg-[var(--bg-blur)] backdrop-blur-[15px] border border-[var(--border-blur)] rounded-2xl
      shadow-md shadow-white/10 text-[var(--text)] hover:-translate-y-1 overflow-hidden transition-all duration-300"
    >
      <Link
        href={`/blogs/${id}`}
        className="block"
        aria-label={`Read more about ${title}`}
        title={title}
      >
        <Image
          className="rounded-t-2xl w-full object-cover"
          src={image}
          alt={`Image for ${title}`}
          width={100}
          height={100}
        />
        <div className="flex items-center justify-between ps-2 pe-3 mt-4">
          <p className="inline-block bg-[var(--bg-white)] text-[var(--black-text)] text-sm rounded-full px-4 py-1">
            {category}
          </p>
          <span className="text-sm text-[var(--text-lowMuted)] ms-2">
            {date.toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
          </span>
        </div>
        <div className="py-2 px-2">
          <h3 className="font-medium text-lg mb-2 tracking-tight text-[var(--text)]">
            {title}
          </h3>
          <p className="mb-2 text-sm tracking-tight text-[var(--text-lowMuted)]">
            {description}
          </p>
        </div>
      </Link>

      <div className="flex items-center justify-between">
        <ButtonLink
          className="inline-block my-2 bg-transparent text-[var(--text)] px-4 py-2 rounded-full 
                 border border-[var(--btn-border)] hover:bg-[var(--btn-bg-hover)] hover:border-[var(--btn-border-hover)]
                 ms-2 transition-all duration-300"
          href={`/blogs/${id}`}
        >
          Read More <FaArrowRight className="inline-block text-lg ml-1" />
        </ButtonLink>

        <div className="flex items-center me-2">
          <Image
            src={author_img}
            alt={`Author image for ${author}`}
            width={20}
            height={20}
            className="rounded-full me-1"
          />
          <span className="text-sm text-[var(--text-lowMuted)]">{author}</span>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;
