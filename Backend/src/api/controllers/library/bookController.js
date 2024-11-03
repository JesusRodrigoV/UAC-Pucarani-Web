const BookModel = require('../../models/library/bookModel.js');

const BookController = {
    getAllBooks: async (req, res) => {
        try {
            const books = await BookModel.getAll();
            res.json(books);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getBookById: async (req, res) => {
        try {
            const book = await BookModel.getById(req.params.id);
            if (!book) return res.status(404).json({ error: 'Book not found' });
            res.json(book);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    createBook: async (req, res) => {
        try {
            const { id_matbib, type_matbib, title_matbib, author_matbib, isbn_matbib, filename, lenguage_matbib, description_matbib, summary_matbib, content_matbib, collaborators } = req.body;

            const newBook = await BookModel.create({id_matbib, type_matbib, title_matbib, author_matbib, isbn_matbib, filename, lenguage_matbib, description_matbib, summary_matbib, content_matbib, collaborators})

            return res.status(200).json({ ok: true, msg: "book adding" })
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    updateBook: async (req, res) => {
        try {
            const updatedBook = await BookModel.update(req.params.id, req.body);
            if (!updatedBook) return res.status(404).json({ error: 'Book not found' });
            res.json(updatedBook);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    deleteBook: async (req, res) => {
        try {
            const deletedBook = await BookModel.delete(req.params.id);
            if (!deletedBook) return res.status(404).json({ error: 'Book not found' });
            res.json(deletedBook);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};

module.exports = BookController;
