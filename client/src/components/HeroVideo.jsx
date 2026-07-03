import { useEffect, useState } from "react";
import { heroMedia } from "../data/siteData";
import SocialLinks from "./SocialLinks";

function HeroVideo() {
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoadVideo(true);
    }, 650);

    return () => window.clearTimeout(timer);
  }, []);

  const hasVideo = Boolean(heroMedia.video);

  return (
    <section
      id="home"
      className="relative min-h-dvh overflow-hidden bg-black pt-[100px] text-center text-white sm:pt-[108px] lg:pt-[112px]"
    >
      <div className="absolute inset-0">
        {loadVideo && hasVideo ? (
          <video
            className="h-full w-full object-cover object-center"
            style={{
              filter: "brightness(2.15) contrast(1.02) saturate(1.12)",
            }}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={heroMedia.poster || undefined}
          >
            <source src={heroMedia.video} type="video/mp4" />
          </video>
        ) : (
          <div className="h-full w-full bg-[radial-gradient(circle_at_center,rgba(38,64,56,0.34),transparent_34%),linear-gradient(135deg,#030505,#080b0c_45%,#000)]" />
        )}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.13),transparent_42%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.00),rgba(0,0,0,0.26)),radial-gradient(circle_at_center,rgba(0,0,0,0.00),rgba(0,0,0,0.14))]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100dvh-6rem)] max-w-6xl flex-col items-center justify-center px-5 py-16">
        <h1 className="font-display text-[3.6rem] italic leading-[0.92] tracking-wide text-white drop-shadow-2xl sm:text-[5.8rem] lg:text-[8rem]">
          Emmons Brown
          <span className="block">Films</span>
        </h1>

        <p className="mt-7 max-w-4xl font-display text-xl leading-8 text-white/95 drop-shadow-lg sm:text-3xl lg:text-4xl">
          Story-driven films for people, brands, and moments.
        </p>

        <SocialLinks />
      </div>
    </section>
  );
}

export default HeroVideo;