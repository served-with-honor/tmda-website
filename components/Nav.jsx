import Link from 'next/link';

export default function Nav({ items }) {
  return (
    <nav>
      {items.map(({ text, path, url }, index) => {
        return path ?
          <Link key={`nav-item-${index}`} href={path}>{text}</Link>
          : <a href={url} target="_blank" rel="noopener">{text}</a>
      })}
    </nav>
  );
}
