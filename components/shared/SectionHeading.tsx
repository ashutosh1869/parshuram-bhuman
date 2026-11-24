
type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: Props) {
  return (
    <div
      className={`section-heading ${
        centered ? "mx-auto text-center" : ""
      }`}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="heading">{title}</h2>
      {description && (
        <p className="description">{description}</p>
      )}
    </div>
  );
}
