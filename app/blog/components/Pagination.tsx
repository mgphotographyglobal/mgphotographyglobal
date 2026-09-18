import Link from "next/link";

function pageHref(page: number): string {
  return page <= 1 ? "/blog/" : `/blog/page/${page}/`;
}

export default function Pagination({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  if (totalPages <= 1) return null;

  const prev = currentPage > 1 ? currentPage - 1 : null;
  const next = currentPage < totalPages ? currentPage + 1 : null;

  return (
    <nav
      aria-label="Blog pagination"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        marginTop: "3.5rem",
      }}
    >
      {prev ? (
        <Link href={pageHref(prev)} className="btn-outline" style={{ fontSize: "0.72rem", padding: "0.75rem 1.5rem" }}>
          &larr; Newer
        </Link>
      ) : (
        <span />
      )}
      <span className="body-sm" style={{ fontSize: "0.8rem" }}>
        Page {currentPage} of {totalPages}
      </span>
      {next ? (
        <Link href={pageHref(next)} className="btn-outline" style={{ fontSize: "0.72rem", padding: "0.75rem 1.5rem" }}>
          Older &rarr;
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
