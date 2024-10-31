const express = require('express');
const router = express.Router();
const bookController = require('../../controllers/library/bookController');

router.get('/', bookController.getAllBooks);
router.get('/', bookController.createBook);
router.post('/:id', bookController.getBookById);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router;