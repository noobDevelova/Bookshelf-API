import books from "../data/books.js";

/**
 * Handler to retrieve all books with optional filtering based on query parameters.
 *
 * This function allows filtering the list of books by name, reading status, or finished status.
 * If a query parameter is provided, it filters the books accordingly. If no filters are applied,
 * it returns the entire list of books.
 *
 * @param {Object} req - The Hapi request object, which contains query parameters for filtering.
 * @param {Object} req.query - The query parameters for filtering the books.
 * @param {string} [req.query.name] - Optional query parameter to filter books by name.
 * @param {string} [req.query.reading] - Optional query parameter to filter books by reading status (1 for true, 0 for false).
 * @param {string} [req.query.finished] - Optional query parameter to filter books by finished status (1 for true, 0 for false).
 *
 * @returns {Object} - Returns an HTTP response object with a status and the filtered list of books.
 */
const getAllBooksHandler = (req) => {
  const { name, reading, finished } = req.query;

  let filteredBooks = books;

  // Filter books by name (case-insensitive)
  if (name) {
    filteredBooks = filteredBooks.filter((book) =>
      book.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  // Filter books by reading status (1 for true, 0 for false)
  if (reading) {
    const isReading = reading === "1";
    filteredBooks = filteredBooks.filter((book) => book.reading === isReading);
  }

  // Filter books by finished status (1 for true, 0 for false)
  if (finished) {
    const isFinished = finished === "1";
    filteredBooks = filteredBooks.filter(
      (book) => book.finished === isFinished
    );
  }

  // Return the filtered list of books
  return {
    status: "success",
    data: {
      books: filteredBooks.map(({ id, name, publisher }) => ({
        id,
        name,
        publisher,
      })),
    },
  };
};

export default getAllBooksHandler;
