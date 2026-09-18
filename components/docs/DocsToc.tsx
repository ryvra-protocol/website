type DocsTocItem = {
  id: string;
  title: string;
};

type DocsTocProps = {
  items: DocsTocItem[];
};

export function DocsToc({ items }: DocsTocProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <nav className="docs-toc" aria-label="Page table of contents">
      <p className="docs-toc-title">On this page</p>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <a className="docs-toc-link" href={`#${item.id}`}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
