import books from "../data/books.js";

/**
 * Handler to retrieve the details of a specific book by its ID.
 *
 * This function searches for a book in the `books` array by its ID and returns the book details if found.
 * If the book is not found, it returns a failure response with an appropriate error message.
 *
 * @param {Object} req - The Hapi request object, which contains the bookId parameter.
 * @param {Object} req.params - The parameters passed in the request URL.
 * @param {string} req.params.bookId - The ID of the book to retrieve.
 * @param {Object} h - The Hapi response toolkit for building HTTP responses.
 *
 * @returns {Object} - Returns an HTTP response object containing the book details if found, or an error message if not found.
 */
const getDetailBookByIdHandler = (req, h) => {
  const { bookId } = req.params;

  // Find the book by its ID
  const book = books.filter((book) => book.id === bookId)[0];

  // If the book is found, return a success response with the book details
  if (book) {
    return h
      .response({
        status: "success",
        data: {
          book: book,
        },
      })
      .code(200);
  }

  // If the book is not found, return a failure response with an error message
  return h
    .response({
      status: "fail",
      message: "Buku tidak ditemukan",
    })
    .code(404);
};

export default getDetailBookByIdHandler;
