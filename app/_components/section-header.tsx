interface SectionHeaderProps {
  number: string;
  title: string;
  className?: string;
}

export default function SectionHeader({
  number,
  title,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`mb-16 md:mb-20 ${className}`}>
      <span className="block font-mono text-xs text-muted-foreground tracking-widest uppercase mb-4">
        {number}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-[42px] font-medium tracking-tight text-foreground">
        {title}
      </h2>
    </div>
  );
}
