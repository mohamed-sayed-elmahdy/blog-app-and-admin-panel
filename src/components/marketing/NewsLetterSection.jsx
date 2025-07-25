function NewsLetterSection() {
  return (
    <div className="px-2 my-10 md:my-20">
      <section className=" mx-auto flex justify-center items-center flex-col text-[var(--text)] z-10 relative max-w-5xl w-full shadow-lg shadow-white/15 px-4 md:px-6 lg:px-10 py-14 bg-[var(--bg-blur)] backdrop-blur-[15px] border border-[var(--border-blur)] rounded-2xl overflow-hidden transition-all duration-300">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">
          Join Our Blog Community
        </h2>
        <p className="text-base md:text-lg mb-6 text-center max-w-2xl">
          Stay in the loop with the latest blog posts, writing tips, and
          exclusive insights from our authors. Subscribe now and never miss a
          post again!
        </p>
        <form
          role="form"
          className="flex flex-col gap-2 sm:gap-0 sm:flex-row items-center w-full max-w-2xl mt-3"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email Address
          </label>
          <input
            id="newsletter-email"
            className="flex-1  border border-[var(--btn-border)] bg-transparent rounded-lg sm:rounded-s-lg sm:rounded-e-none text-[var(--text)] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--ring-color)]"
            type="email"
            placeholder="Enter your email address"
            name="email"
            autoComplete="email"
          />
          <button
            type="submit"
            className="bg-transparent hover:bg-[var(--btn-bg-hover)] border-[var(--btn-border)] 
        hover:border-[var(--btn-border-hover)] backdrop-blur-3xl border text-[var(--text)] px-10 py-3
        rounded-lg sm:rounded-e-lg sm:rounded-s-none font-semibold transition-all duration-300 shadow-lg"
          >
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
}

export default NewsLetterSection;
