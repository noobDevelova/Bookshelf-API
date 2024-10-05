import {
  addBooksHandler,
  deleteBookById,
  getAllBooksHandler,
  getDetailBookByIdHandler,
  updateBookByIdHandler,
} from "../handler/index.js";

/**
 * Array of route objects that define the API endpoints for managing books.
 *
 * This module exports an array of route configurations for handling requests to:
 * - Retrieve all books
 * - Add a new book
 * - Retrieve a specific book by its ID
 * - Update a book by its ID
 * - Delete a book by its ID
 *
 * Each route is associated with a specific HTTP method and handler function.
 *
 * @module routes
 * @type {Array<Object>}
 *
 * @property {string} method - The HTTP method (GET, POST, PUT, DELETE).
 * @property {string} path - The URL path for the route.
 * @property {Function} handler - The function that handles the request for this route.
 */

const routes = [
  {
    method: "GET",
    path: "/books",
    handler: getAllBooksHandler,
  },
  {
    method: "POST",
    path: "/books",
    handler: addBooksHandler,
  },
  {
    method: "GET",
    path: "/books/{bookId}",
    handler: getDetailBookByIdHandler,
  },
  {
    method: "PUT",
    path: "/books/{bookId}",
    handler: updateBookByIdHandler,
  },
  {
    method: "DELETE",
    path: "/books/{bookId}",
    handler: deleteBookById,
  },
];

export default routes;
