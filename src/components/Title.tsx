const Title = ({ title }: { title: string }) => {
  return (
    <div className="relative mt-4 mb-2 w-full pt-2">
      <div className="flex items-center gap-1 sm:gap-4">
        <hr className="border-0.5 w-full border-dotted border-[var(--accent)]" />
        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-full bg-[url('/background.webp')] bg-cover opacity-30"></div>
          <h1 className="corinthia w-fit rounded-full px-4 pt-1 text-[2.5rem] font-medium tracking-wide text-nowrap text-[var(--primary)]">
            {title}
          </h1>
        </div>
        <hr className="border-0.5 w-full border-dotted border-[var(--accent)]" />
      </div>
    </div>
  );
};

export default Title;
