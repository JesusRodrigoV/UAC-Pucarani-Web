const express = require('express');
const BookController = require('../../controllers/library/bookController.js');

const router = express.Router();

// Route definitions
router.get('/', BookController.getAllBooks);
router.get('/:id', BookController.getBookById);
router.post('/', BookController.createBook);
router.put('/:id', BookController.updateBook);
router.delete('/:id', BookController.deleteBook);

module.exports = router;
