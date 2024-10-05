import Joi from "joi";

/**
 * Joi schema for validating book objects.
 *
 * This schema validates the properties of a book object, ensuring required fields are present
 * and the values meet the expected format and constraints. It also provides custom error messages
 * for validation failures.
 *
 * @constant {Object} bookSchema
 *
 * @property {string} name - The name of the book, required.
 * @property {number} year - The publication year of the book, required.
 * @property {string} author - The author of the book, required.
 * @property {string} summary - An optional summary of the book.
 * @property {string} publisher - The publisher of the book, required.
 * @property {number} pageCount - The total number of pages in the book, required.
 * @property {number} readPage - The number of pages that have been read, required and must be less than or equal to pageCount.
 * @property {boolean} reading - Indicates if the book is currently being read, required.
 *
 * @returns {Object} - The Joi validation schema for a book object.
 */
const bookSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": "Mohon isi nama buku",
    "any.required": "Mohon isi nama buku",
  }),
  year: Joi.number().required(),
  author: Joi.string().required(),
  summary: Joi.string().optional(),
  publisher: Joi.string().required(),
  pageCount: Joi.number().required(),
  readPage: Joi.number().required().max(Joi.ref("pageCount")).messages({
    "number.max": "readPage tidak boleh lebih besar dari pageCount",
  }),
  reading: Joi.boolean().required(),
});

export default bookSchema;
