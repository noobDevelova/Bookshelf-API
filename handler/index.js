import addBooksHandler from "./addBookHandler.js";
import deleteBookById from "./deleteBookByIdHandler.js";
import getAllBooksHandler from "./getAllBooksHandler.js";
import getDetailBookByIdHandler from "./getDetailBookByIdHandler.js";
import updateBookByIdHandler from "./updateBookByIdHandler.js";

/**
 * Exports the handler functions for managing books in the system.
 *
 * This module provides functions to add, delete, update, and retrieve book information.
 * These handlers are intended to be used with a Hapi.js server for handling book-related requests.
 *
 * @module handler
 */

export {
  addBooksHandler,
  deleteBookById,
  getAllBooksHandler,
  getDetailBookByIdHandler,
  updateBookByIdHandler,
};
