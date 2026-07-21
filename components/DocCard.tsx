import Link from "next/link";

type DocCardProps = {
  title: string;
  description: string;
  href: string;
};

export function DocCard({ title, description, href }: DocCardProps) {
  return (
    <Link href={href} className="card" aria-label={title}>
      <strong>{title}</strong>
      <p>{description}</p>
    </Link>
  );
}
