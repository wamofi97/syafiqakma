const Title = ({ title }: { title: string }) => {
  return (
    <div className="relative mt-4 mb-2 w-full pt-2">
      <div className="absolute inset-0 -z-10 rounded-2xl bg-[url('/background.webp')] bg-cover opacity-50"></div>
      <h1 className="corinthia bg-cover text-5xl font-medium tracking-wide text-[var(--primary)]">
        {title}
      </h1>
    </div>
  );
};

export default Title;
