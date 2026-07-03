function SectionShell({ id, kicker, title, children }) {
  return (
    <section
      id={id}
      className="border-t border-white/10 bg-ink px-6 py-24 text-white sm:px-10 lg:px-20 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">
        {kicker && (
          <p className="mb-5 text-xs font-black uppercase tracking-[0.18em] text-ember">
            {kicker}
          </p>
        )}

        {title && (
          <h2 className="max-w-5xl text-[2.8rem] font-black leading-[0.96] tracking-[-0.075em] sm:text-[4.5rem] lg:text-[7rem]">
            {title}
          </h2>
        )}

        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}

export default SectionShell;