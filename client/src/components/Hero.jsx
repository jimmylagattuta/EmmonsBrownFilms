import { useEffect, useMemo, useState } from "react";
import { heroSlides } from "../data/siteData";

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loadVideo, setLoadVideo] = useState(false);

  const activeSlide = useMemo(() => {
    return heroSlides[activeIndex] || heroSlides[0];
  }, [activeIndex]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoadVideo(true);
    }, 650);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (heroSlides.length <= 1) return;

    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) =>
        currentIndex === heroSlides.length - 1 ? 0 : currentIndex + 1
      );
    }, 8000);

    return () => window.clearInterval(interval);
  }, []);

  if (!activeSlide) return null;

  return (
    <section
      id="home"
      className="relative min-h-dvh overflow-hidden bg-ink text-white"
    >
      <div className="absolute inset-0">
        {loadVideo && activeSlide.video ? (
          <video
            key={activeSlide.video}
            className="h-full w-full object-cover object-[50%_48%] md:object-center"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={activeSlide.poster}
          >
            <source src={activeSlide.video} type="video/mp4" />
          </video>
        ) : (
          <img
            src={activeSlide.poster}
            alt=""
            className="h-full w-full object-cover object-[50%_48%] md:object-center"
            loading="eager"
            fetchPriority="high"
          />
        )}

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.25),rgba(0,0,0,0.78)),radial-gradient(circle_at_center,rgba(0,0,0,0.02),rgba(0,0,0,0.72))]" />
      </div>

      <div className="relative z-10 flex min-h-dvh max-w-7xl flex-col justify-end px-6 pb-16 pt-32 sm:px-10 lg:justify-center lg:px-20 lg:pb-20">
        <p className="mb-5 inline-flex w-fit rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.2em] text-white/85 backdrop-blur-md">
          {activeSlide.eyebrow}
        </p>

        <h1 className="max-w-6xl text-[3.6rem] font-black leading-[0.92] tracking-[-0.085em] text-white sm:text-[5rem] lg:text-[8.8rem]">
          {activeSlide.title}
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
          {activeSlide.description}
        </p>

        <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a
            href="#work"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-black uppercase tracking-[0.12em] text-black no-underline transition hover:-translate-y-1 hover:bg-white/90"
          >
            View Work
          </a>

          <a
            href="#contact"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 text-sm font-black uppercase tracking-[0.12em] text-white no-underline backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/15"
          >
            Contact
          </a>
        </div>

        {heroSlides.length > 1 && (
          <div className="mt-10 flex gap-3">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.video || slide.poster || index}
                type="button"
                aria-label={`Show hero slide ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition ${
                  activeIndex === index
                    ? "w-10 bg-white"
                    : "w-2.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Hero;