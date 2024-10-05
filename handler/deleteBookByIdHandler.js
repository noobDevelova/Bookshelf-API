import books from "../data/books.js";

/**
 * Handler to delete a book by its ID.
 *
 * This function looks for a book in the `books` array by its ID, and if found, removes it.
 * It returns a success response if the book is successfully deleted. If the book is not found,
 * it returns a failure response with an appropriate message.
 *
 * @param {Object} req - The Hapi request object, which contains the bookId parameter.
 * @param {Object} h - The Hapi response toolkit for building HTTP responses.
 *
 * @returns {Object} - Returns an HTTP response object with a status code and message.
 */
const deleteBookById = (req, h) => {
  const { bookId } = req.params;

  // Find the index of the book with the given ID
  const index = books.findIndex((book) => book.id === bookId);

  // If the book is found, remove it from the array
  if (index !== -1) {
    books.splice(index, 1);

    // Return success response
    return h
      .response({
        status: "success",
        message: "Buku berhasil dihapus",
      })
      .code(200);
  }

  // Return failure response if the book is not found
  return h
    .response({
      status: "fail",
      message: "Buku gagal dihapus. Id tidak ditemukan",
    })
    .code(404);
};

export default deleteBookById;
