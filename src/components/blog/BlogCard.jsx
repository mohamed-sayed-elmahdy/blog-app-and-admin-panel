import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight, FaHeart, FaBookmark } from "react-icons/fa6";
import ButtonLink from "@/components/ui/ButtonLink";
import { FaRegComment } from "react-icons/fa6";
import { useLocale } from "next-intl";

function BlogCard({
  id,
  title,
  content,
  createdAt,
  description,
  category,
  image,
  authorName,
  authorImage,
  likes,
  pinned,
  path,
}) {

  const locale = useLocale();

  const formattedDate = createdAt && new Date(createdAt).toLocaleDateString(locale, {
    day: "numeric",
    month: "short",
    year: "numeric",
  });


  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  // light (mouse-follow) state
  const [light, setLight] = useState({ x: -9999, y: -9999, visible: false });

  const toggleLike = (e) => {
    e.preventDefault();
    setLiked((s) => !s);
  };

  const toggleSave = (e) => {
    e.preventDefault();
    setSaved((s) => !s);
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setLight({ x, y, visible: true });
  };

  const handleMouseLeave = () => {
    setLight((s) => ({ ...s, visible: false }));
  };

  return (
    <article
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative max-w-[350px] w-full bg-[var(--bg-blur)] backdrop-blur-[15px] border border-[var(--border-blur)] rounded-2xl
      shadow-md shadow-white/10 text-[var(--text)] overflow-hidden transition-all duration-300"
    >
      {/* subtle mouse-follow light */}
      <div
        aria-hidden="true"
        style={{
          left: light.x,
          top: light.y,
          opacity: light.visible ? 1 : 0,
          transform: "translate(-50%, -30%)",
          transition: "opacity 160ms linear, transform 160ms linear",
        }}
        className="pointer-events-none absolute w-[600px] h-[600px] rounded-full -z-10 blur-[30px]"
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "9999px",
            background:
              "radial-gradient(circle at 40% 30%, var(--light-start), var(--light-mid) 35%, var(--light-end) 35%,transparent 60%)",
            mixBlendMode: "screen",
          }}
        />
      </div>

      <Link
        href={path}
        className="block"
        aria-label={`Read more about ${title[locale]}`}
        title={title[locale]}
      >
        <Image
          src={image}
          alt={`Image for ${title[locale]}`}
          width={800}
          height={600}
          className="rounded-t-2xl w-full object-cover max-h-[280px]"
        />
        <div className="flex items-center justify-between ps-2 pe-3 mt-4">
          <p className="inline-block capitalize bg-[var(--bg-white)] text-[var(--black-text)] text-sm rounded-full px-4 py-1">
            {category[locale]}
          </p>
          <span className="text-sm text-[var(--text-lowMuted)] ms-2">
            {formattedDate}
          </span>
        </div>
        <div className="py-2 px-2">
          <h3 className="font-medium text-lg mb-2 tracking-tight text-[var(--text)]"
            aria-label={`Blog title: ${title[locale]}`}
          >
            {title[locale].slice(0, 35) + "..."}
          </h3>
          <p className="mb-2 mt-auto text-sm tracking-tight text-[var(--text-lowMuted)]">
            {content[locale].slice(0, 50) + "..."}
          </p>
        </div>
      </Link>

      {/* like, save and comment buttons */}
      <div className="flex items-center justify-start gap-2 ms-1 mb-2">
        {/* Like Button */}
        <button
          type="button"
          aria-pressed={liked}
          aria-label={liked ? "Unlike" : "Like"}
          onClick={toggleLike}
          className="p-1 rounded-full transition-all duration-300 flex items-center gap-1"
        >
          <FaHeart
            className="text-lg transition-all duration-500 hover:fill-[var(--like-blue-dark)]"
            aria-hidden="true"
            fill={liked ? "var(--like-blue-dark)" : "var(--text)"}
          />
          <span className="text-[13px] text-[var(--text)] transition-all duration-300">
            {liked ? likes + 1 : likes}
          </span>
        </button>

        {/* Save Button */}
        <button
          type="button"
          aria-pressed={saved}
          aria-label={saved ? "Remove from Read Later" : "Save for Read Later"}
          onClick={toggleSave}
          className="p-1 rounded-full transition-all duration-500"
        >
          <FaBookmark
            className="text-lg transition-all duration-500 hover:fill-[var(--save-blue-light)]"
            aria-hidden="true"
            fill={saved ? "var(--save-blue-light)" : "var(--text)"}
          />
        </button>

        {/* Comment Button */}
        <div aria-label="Comments" className="p-1 hidden justify-start items-center gap-1">
          <FaRegComment
            className="text-lg transition-all duration-500"
            aria-hidden="true"
            fill="var(--text)"
          />
          <span className="text-[13px] text-[var(--text)]">5</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <ButtonLink
          className="inline-block my-2 bg-transparent text-[var(--text)] px-4 py-2 rounded-full 
                 border border-[var(--btn-border)] hover:bg-[var(--btn-bg-hover)] hover:border-[var(--btn-border-hover)]
                 ms-1 transition-all duration-300"
          href={`/blogs/${id}`}
        >
          Read More <FaArrowRight className="inline-block text-lg ms-1 rtl-flip" />
        </ButtonLink>

        <div className="flex items-center me-2">
          <Image
            src={authorImage}
            alt={`Author image for ${authorName[locale]}`}
            width={20}
            height={20}
            className="rounded-full me-1 w-[20px] h-[20px]"
          />
          <span className="text-sm text-[var(--text-lowMuted)]">{authorName[locale]}</span>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;
