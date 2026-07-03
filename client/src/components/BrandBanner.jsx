import { brandMedia, socialLinks } from "../data/siteData";
import SocialLinks from "./SocialLinks";

function BrandBanner() {
  return (
    <section
      id="home"
      className="relative flex min-h-[360px] items-center justify-center overflow-hidden bg-black px-5 pt-24 text-center text-white sm:min-h-[440px] lg:min-h-[520px]"
    >
      <img
        src={brandMedia.bannerImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[50%_48%]"
        loading="eager"
        fetchPriority="high"
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.18),rgba(0,0,0,0.78)),radial-gradient(circle_at_center,rgba(0,0,0,0.05),rgba(0,0,0,0.68))]" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center">
        <h1 className="font-display text-[3rem] italic leading-none tracking-wide text-white drop-shadow-2xl sm:text-[5rem] lg:text-[7rem]">
          Emmons Brown Films
        </h1>

        <p className="mt-6 max-w-3xl font-display text-xl leading-8 text-white/90 sm:text-3xl">
          Story-driven films for people, brands, and moments.
        </p>

       <SocialLinks />
      </div>
    </section>
  );
}

export default BrandBanner;