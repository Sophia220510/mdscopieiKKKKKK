import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "center" }: Props) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl text-left"
      }
    >
      <Reveal>
        <span className="text-[0.7rem] uppercase tracking-[0.32em] text-muted-foreground">
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-5 font-serif text-3xl font-light leading-[1.15] text-foreground sm:text-4xl md:text-[2.75rem]">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
