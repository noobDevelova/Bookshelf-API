import books from "../data/books.js";
import bookSchema from "../schema/index.js";

/**
 * Handler to update a specific book by its ID.
 *
 * This function validates the updated book data using the book schema. If validation passes,
 * it searches for the book by its ID, updates its information, and returns a success response.
 * If the validation fails or the book is not found, it returns a failure response with an appropriate message.
 *
 * @param {Object} req - The Hapi request object, containing the bookId in the URL parameters and the book data in the payload.
 * @param {Object} req.params - The parameters passed in the request URL.
 * @param {string} req.params.bookId - The ID of the book to be updated.
 * @param {Object} req.payload - The payload containing the updated book details.
 * @param {Object} h - The Hapi response toolkit for building HTTP responses.
 *
 * @returns {Object} - Returns an HTTP response object indicating the success or failure of the update operation.
 */
const updateBookByIdHandler = (req, h) => {
  // Validate the payload against the book schema
  const { value, error } = bookSchema.validate(req.payload);
  const { bookId } = req.params;

  // If validation fails, return an error response
  if (error) {
    return h
      .response({
        status: "fail",
        message:
          "Gagal memperbarui buku. " +
          error.details.map((detail) => detail.message).join(","),
      })
      .code(400);
  }

  // Destructure the validated values from the payload
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = value;

  // Find the index of the book to be updated by its ID
  const index = books.findIndex((book) => book.id === bookId);
  const updatedAt = new Date().toISOString();
  const finished = pageCount === readPage;

  // If the book is found, update its information
  if (index !== -1) {
    books[index] = {
      ...books[index],
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      finished,
      readPage,
      reading,
      updatedAt,
    };

    // Return success response
    return h
      .response({
        status: "success",
        message: "Buku berhasil diperbarui",
      })
      .code(200);
  }

  // If the book is not found, return a failure response
  return h
    .response({
      status: "fail",
      message: "Gagal memperbarui buku. Id tidak ditemukan",
    })
    .code(404);
};

export default updateBookByIdHandler;
