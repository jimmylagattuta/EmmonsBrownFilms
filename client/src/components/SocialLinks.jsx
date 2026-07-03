import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/",
    icon: faInstagram,
    hoverColor: "group-hover:text-[#E4405F]",
  },
  {
    label: "YouTube",
    href: "https://youtube.com/",
    icon: faYoutube,
    hoverColor: "group-hover:text-[#FF0000]",
  },
];

function SocialLinks() {
  const iconRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("in-view", entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    iconRefs.current.forEach((icon) => {
      if (icon) observer.observe(icon);
    });

    return () => {
      iconRefs.current.forEach((icon) => {
        if (icon) observer.unobserve(icon);
      });
    };
  }, []);

  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-5">
      {socials.map((social, index) => (
        <a
          key={social.label}
          ref={(el) => {
            iconRefs.current[index] = el;
          }}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="group flex scale-[0.88] items-center gap-3 rounded-full border border-white/20 bg-black/30 px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-white/80 opacity-0 shadow-[0_10px_28px_rgba(0,0,0,0.32)] backdrop-blur-md transition duration-500 hover:-translate-y-1 hover:border-white/40 hover:bg-white hover:shadow-[0_18px_42px_rgba(0,0,0,0.45)] [&.in-view]:scale-100 [&.in-view]:opacity-100"
        >
          <FontAwesomeIcon
            icon={social.icon}
            className={`text-xl text-white/85 transition duration-500 group-hover:scale-110 ${social.hoverColor}`}
          />

          <span
            className={`text-white/85 transition duration-500 ${social.hoverColor}`}
          >
            {social.label}
          </span>
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;