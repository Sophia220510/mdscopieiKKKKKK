import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "center" }: Props) {
  return (
    <Reveal
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl text-left"
      }
    >
      <span className="text-[0.7rem] uppercase tracking-[0.32em] text-muted-foreground">
        {eyebrow}
      </span>
      <h2 className="mt-5 font-serif text-3xl font-light leading-[1.15] text-foreground sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {description}
        </p>
      )}
    </Reveal>
  );
}
