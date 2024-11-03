const express = require('express');
const router = express.Router();
const PdfController = require('../../controllers/pdf/pdfController.js');
const multer = require('multer');

// Configuración de Multer
const storage = multer.memoryStorage(); // Almacenar el archivo en la memoria
const upload = multer({ storage: storage });

// Ruta para subir un PDF
router.post('/upload', upload.single('file'), PdfController.uploadPDF);

// Ruta para descargar un PDF
router.get('/download/:filename', PdfController.downloadPDF);

module.exports = router;
