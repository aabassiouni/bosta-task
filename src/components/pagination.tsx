export function Pagination({
  currentPage,
  setCurrentPage,
  totalPages,
}: {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
}) {
  return (
    <div className="flex justify-center gap-2">
      <button
        className="rounded-md border border-gray-300 bg-white px-3 py-1 disabled:opacity-50"
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Previous
      </button>
      <span className="flex items-center">
        Page {currentPage} of {totalPages}
      </span>
      <button
        className="rounded-md border border-gray-300 bg-white px-3 py-1 disabled:opacity-50"
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
}
