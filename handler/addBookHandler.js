import { nanoid } from "nanoid";
import books from "../data/books.js";
import bookSchema from "../schema/index.js";

/**
 * Handler to add a new book to the collection.
 *
 * This function validates the book data from the request payload using the book schema.
 * If validation passes, it creates a new book object, adds it to the `books` array, and
 * returns a success response. If validation fails, it returns a failure response with
 * detailed error messages.
 *
 * @param {Object} req - The Hapi request object, containing the payload with book details.
 * @param {Object} h - The Hapi response toolkit for building HTTP responses.
 *
 * @returns {Object} - Returns an HTTP response object with a status code and message.
 */
const addBooksHandler = (req, h) => {
  // Validate the payload against the book schema
  const { error, value } = bookSchema.validate(req.payload, {
    abortEarly: false,
  });

  // If validation fails, return an error response
  if (error) {
    return h
      .response({
        status: "fail",
        message:
          "Gagal menambahkan buku. " +
          error.details.map((detail) => detail.message).join(","),
      })
      .code(400);
  }

  // Destructure validated values
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

  // Create a new book object with a unique ID and timestamps
  const id = nanoid(16);
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;
  const finished = pageCount === readPage;

  const newBook = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    finished,
    reading,
    insertedAt,
    updatedAt,
  };

  // Add the new book to the books array
  books.push(newBook);
  const isSuccess = books.filter((book) => book.id === id).length > 0;

  // Return success response if the book is added successfully
  if (isSuccess) {
    return h
      .response({
        status: "success",
        message: "Buku berhasil ditambahkan",
        data: {
          bookId: id,
        },
      })
      .code(201);
  }

  // Return a failure response if the book could not be added
  return h
    .response({
      status: "fail",
      message: "Gagal menambahkan buku.",
    })
    .code(500);
};

export default addBooksHandler;
