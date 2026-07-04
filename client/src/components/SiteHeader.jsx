import { useEffect, useState } from "react";
import { brandMedia, contactInfo, navLinks, socialLinks } from "../data/siteData";

const DEFAULT_DESKTOP_NAV_IMAGE_Y = 10;
const NAV_IMAGE_STEP = 1;
const MIN_DESKTOP_NAV_IMAGE_Y = 0;
const MAX_DESKTOP_NAV_IMAGE_Y = 60;

function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [desktopNavImageY, setDesktopNavImageY] = useState(
    DEFAULT_DESKTOP_NAV_IMAGE_Y
  );

  function closeMenu() {
    setIsOpen(false);
  }

  function moveDesktopNavImageUp() {
    setDesktopNavImageY((current) =>
      Math.max(MIN_DESKTOP_NAV_IMAGE_Y, current - NAV_IMAGE_STEP)
    );
  }

  function moveDesktopNavImageDown() {
    setDesktopNavImageY((current) =>
      Math.min(MAX_DESKTOP_NAV_IMAGE_Y, current + NAV_IMAGE_STEP)
    );
  }

  function resetDesktopNavImage() {
    setDesktopNavImageY(DEFAULT_DESKTOP_NAV_IMAGE_Y);
  }

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isOpen]);

  useEffect(() => {
    function handleKeyDown(event) {
      if (window.innerWidth < 1024) return;

      if (event.key === "ArrowUp") {
        event.preventDefault();
        moveDesktopNavImageUp();
      }

      if (event.key === "ArrowDown") {
        event.preventDefault();
        moveDesktopNavImageDown();
      }

      if (event.key.toLowerCase() === "r") {
        resetDesktopNavImage();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <header className="fixed left-0 top-0 z-50 h-[158px] w-full overflow-hidden text-white sm:h-[118px] lg:h-[112px]">
        {/* Mobile/tablet image: unchanged */}
        <img
          src={brandMedia.navImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[50%_55%] opacity-100 sm:object-[50%_42%] lg:hidden"
          loading="eager"
          fetchPriority="high"
        />

        {/* Desktop image: adjustable with up/down keys */}
        <img
          src={brandMedia.navImage}
          alt=""
          className="absolute inset-0 hidden h-full w-full object-cover opacity-100 lg:block lg:scale-105"
          style={{
            objectPosition: `50% ${desktopNavImageY}%`,
          }}
          loading="eager"
          fetchPriority="high"
        />

        {/* Main cinematic darkening */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.04),rgba(0,0,0,0.38)),linear-gradient(to_right,rgba(0,0,0,0.68),rgba(0,0,0,0.16),rgba(0,0,0,0.36))] sm:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.18),rgba(0,0,0,0.28)),linear-gradient(to_right,rgba(0,0,0,0.68),rgba(0,0,0,0.12),rgba(0,0,0,0.34))] lg:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.24),rgba(0,0,0,0.50)),linear-gradient(to_right,rgba(0,0,0,0.80),rgba(0,0,0,0.34),rgba(0,0,0,0.56))]" />

        {/* Left-to-right fade: black into soft white */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.34)_28%,rgba(255,255,255,0.13)_56%,rgba(255,255,255,0.20)_100%)] sm:bg-[linear-gradient(to_right,rgba(0,0,0,0.70)_0%,rgba(0,0,0,0.28)_30%,rgba(255,255,255,0.10)_58%,rgba(255,255,255,0.16)_100%)] lg:bg-[linear-gradient(to_right,rgba(0,0,0,0.80)_0%,rgba(0,0,0,0.38)_30%,rgba(255,255,255,0.08)_58%,rgba(0,0,0,0.22)_100%)]" />

        {/* Brighter oval spotlight behind the logo */}
        <div className="pointer-events-none absolute left-1/2 top-[16px] h-[104px] w-[360px] -translate-x-1/2 rounded-[999px] bg-white/24 blur-2xl sm:top-[10px] sm:h-[92px] sm:w-[430px] sm:bg-white/18 lg:top-[6px] lg:h-[92px] lg:w-[500px] lg:bg-white/10" />

        {/* Soft misty center glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[132px] w-[520px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.24),rgba(255,255,255,0.1)_34%,transparent_72%)] sm:h-[116px] sm:w-[620px] sm:bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.16),rgba(255,255,255,0.07)_36%,transparent_72%)] lg:h-[108px] lg:w-[700px] lg:bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),rgba(255,255,255,0.03)_36%,transparent_72%)]" />

        {/* Smooth bottom fade so navbar blends into hero/video */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent via-black/30 to-black/78 sm:h-20 sm:via-black/24 sm:to-black/64 lg:h-20 lg:via-black/24 lg:to-black/64" />

        {/* Extra soft bottom edge */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-b from-transparent to-black/66 sm:h-8 sm:to-black/52 lg:to-black/56" />

        <div className="relative z-10 flex h-full w-full items-start justify-between px-5 pt-10 sm:items-center sm:px-8 sm:pt-0 lg:px-14 xl:px-18">
          {/* Desktop/tablet logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="group hidden flex-col leading-none no-underline sm:flex"
          >
            <span className="font-scriptAllura text-[3.35rem] leading-none text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.95)] transition-opacity group-hover:opacity-85 lg:text-[3.6rem]">
              Emmons Brown
            </span>

            <span className="mt-2 text-[0.68rem] font-black uppercase tracking-[0.42em] text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
              Films
            </span>
          </a>

          {/* Mobile logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="group absolute left-1/2 top-[39px] flex -translate-x-1/2 flex-col items-center leading-none no-underline sm:hidden"
          >
            <span className="whitespace-nowrap font-scriptAllura text-[2.7rem] leading-none text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.98)] transition-opacity group-hover:opacity-85">
              Emmons Brown
            </span>

            <span className="mt-1 whitespace-nowrap font-scriptAllura text-[1.85rem] leading-none text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.98)] transition-opacity group-hover:opacity-85">
              Films
            </span>
          </a>

          <div className="ml-auto hidden items-center lg:flex">
            <nav className="flex items-center gap-8 xl:gap-10 2xl:gap-12">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative text-[0.76rem] font-black uppercase tracking-[0.26em] text-white/86 no-underline drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] transition duration-300 after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-white/80 after:transition-all after:duration-300 hover:text-white hover:after:w-full"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
            className="group absolute right-5 top-[54px] flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/35 bg-black/25 shadow-[0_12px_30px_rgba(0,0,0,0.35)] backdrop-blur-md transition duration-300 hover:border-white/55 hover:bg-white/10 sm:relative sm:right-auto sm:top-auto sm:ml-7 sm:h-[52px] sm:w-[52px] lg:hidden"
          >
            <span className="sr-only">
              {isOpen ? "Close menu" : "Open menu"}
            </span>

            <span
              className={`absolute h-[2px] w-5 rounded-full bg-white transition duration-200 sm:w-[22px] ${
                isOpen ? "translate-y-0 rotate-45" : "-translate-y-[7px]"
              }`}
            />

            <span
              className={`absolute h-[2px] w-5 rounded-full bg-white transition duration-200 sm:w-[22px] ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />

            <span
              className={`absolute h-[2px] w-5 rounded-full bg-white transition duration-200 sm:w-[22px] ${
                isOpen ? "translate-y-0 -rotate-45" : "translate-y-[7px]"
              }`}
            />
          </button>
        </div>
      </header>

      {/* Desktop-only subtle nav image tuner */}
      <div className="fixed bottom-4 right-4 z-[70] hidden items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-2 text-[0.65rem] font-black uppercase tracking-[0.14em] text-white/55 opacity-35 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md transition hover:opacity-100 lg:flex">
        <span>Nav crop {desktopNavImageY}%</span>

        <button
          type="button"
          onClick={moveDesktopNavImageUp}
          className="rounded-full border border-white/15 px-2 py-1 text-white/70 transition hover:border-white/35 hover:text-white"
          aria-label="Move nav image up"
        >
          ↑
        </button>

        <button
          type="button"
          onClick={moveDesktopNavImageDown}
          className="rounded-full border border-white/15 px-2 py-1 text-white/70 transition hover:border-white/35 hover:text-white"
          aria-label="Move nav image down"
        >
          ↓
        </button>

        <button
          type="button"
          onClick={resetDesktopNavImage}
          className="rounded-full border border-white/15 px-2 py-1 text-white/70 transition hover:border-white/35 hover:text-white"
          aria-label="Reset nav image"
        >
          R
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-[radial-gradient(circle_at_20%_20%,rgba(82,120,98,0.22),transparent_34%),linear-gradient(135deg,#070909,#111417_58%,#050606)] text-white transition duration-300 ${
          isOpen
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
      >
        <div className="grid min-h-dvh grid-cols-1 gap-12 px-7 pb-12 pt-36 sm:px-10 sm:pt-32 lg:grid-cols-[1.05fr_0.85fr] lg:items-center lg:gap-16 lg:px-20 lg:pt-28 xl:px-24">
          <nav className="flex flex-col items-start gap-1 sm:gap-2 lg:gap-3">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className={`text-[3.55rem] font-black leading-[0.95] tracking-[-0.08em] no-underline transition duration-300 hover:translate-x-2 hover:text-white sm:text-[5.6rem] lg:text-[7.4rem] xl:text-[8rem] ${
                  index === 0 ? "text-white" : "text-white/45"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="grid max-w-md gap-8 lg:justify-self-end lg:pr-2">
            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-ember">
                Based in
              </p>
              <p className="text-base text-white/85">{contactInfo.location}</p>
            </div>

            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-ember">
                Social
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-bold text-white/85 no-underline transition hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-ember">
                Drop a line
              </p>

              <a
                href={`mailto:${contactInfo.email}`}
                className="text-sm font-bold text-white/85 no-underline transition hover:text-white"
              >
                {contactInfo.email}
              </a>
            </div>

            <div className="pointer-events-none hidden select-none text-[7rem] font-black italic leading-none tracking-[-0.08em] text-white/[0.035] lg:block">
              Emmons
              <br />
              Brown
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SiteHeader;