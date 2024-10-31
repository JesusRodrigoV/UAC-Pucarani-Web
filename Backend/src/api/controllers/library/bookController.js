const Book = require('../../models/library/bookModel');

// Obtener todos los libros
const getAllBooks = async (req, res) => {
    try {
        const books = await Book.findAll();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los libros' });
    }
};

// Obtener un libro por ID
const getBookById = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id); // Busca por ID
        if (book) {
            res.status(200).json(book);
        } else {
            res.status(404).json({ error: 'Libro no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el libro' });
    }
};

// Crear un nuevo libro
const createBook = async (req, res) => {
    try {
        const newBook = await Book.create(req.body); // Crea un nuevo libro
        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el libro' });
    }
};

// Actualizar un libro por ID
const updateBook = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (book) {
            await book.update(req.body); // Actualiza el libro
            res.status(200).json(book);
        } else {
            res.status(404).json({ error: 'Libro no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el libro' });
    }
};

// Eliminar un libro por ID
const deleteBook = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (book) {
            await book.destroy(); // Elimina el libro
            res.status(200).json({ message: 'Libro eliminado' });
        } else {
            res.status(404).json({ error: 'Libro no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el libro' });
    }
};

// Exporta las funciones
module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
};
