import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight, FaHeart, FaBookmark } from "react-icons/fa6";
import ButtonLink from "@/components/ui/ButtonLink";
// ...existing code...
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
  // like and read-later state (client-side only)
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
      className="relative max-w-[330px] bg-[var(--bg-blur)] backdrop-blur-[15px] border border-[var(--border-blur)] rounded-2xl
      shadow-md shadow-white/10 text-[var(--text)] overflow-hidden transition-all duration-300"
    >
      {/* subtle mouse-follow light */}
      <div
        aria-hidden="true"
        style={{
          left: light.x,
          top: light.y,
          opacity: light.visible ? 1 : 0,
          transform: "translate(-50%, -50%)",
          transition: "opacity 160ms linear, transform 160ms linear",
        }}
        className="pointer-events-none absolute w-[550px] h-[550px] rounded-full -z-10 blur-[30px]"
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
          {/* like and read-later buttons */}
          <div className="flex items-center justify-start gap-1 ms-1 ">
            <button
              type="button"
              aria-pressed={liked}
              aria-label={liked ? "Unlike" : "Like"}
              onClick={toggleLike}
              className={`p-2 rounded-full transition-all duration-300 
              }`}
            >
              
                <FaHeart
                  className={`text-lg transition-all duration-500 `}
                  aria-hidden="true"
                  fill={liked ? "#77C3EC" : "var(--text)"}
          
                />
            
             

            </button>

            <button
              type="button"
              aria-pressed={saved}
              aria-label={saved ? "Remove from Read Later" : "Save for Read Later"}
              onClick={toggleSave}
              className={`p-2 rounded-full transition-all duration-500`}
            >
              <FaBookmark
                className={`text-lg transition-all duration-500`}
                aria-hidden="true"
                fill={saved ? "#4C5FFF" : "var(--text)"}
              />
            </button>
          </div>
      <div className="flex items-center justify-between">
        <ButtonLink
          className="inline-block my-2 bg-transparent text-[var(--text)] px-4 py-2 rounded-full 
                 border border-[var(--btn-border)] hover:bg-[var(--btn-bg-hover)] hover:border-[var(--btn-border-hover)]
                 ms-2 transition-all duration-300"
          href={`/blogs/${id}`}
        >
          Read More <FaArrowRight className="inline-block text-lg ms-1 rtl-flip" />
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
// ...existing code...