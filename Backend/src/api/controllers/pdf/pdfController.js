const minioClient = require('../../../config/minioClient'); 

const PdfController = {
    // Función para subir un PDF
    uploadPDF: (req, res) => {
        const file = req.file; // Usar multer para manejar el archivo en la solicitud
        const bucketName = 'pdf-bucket';

        minioClient.putObject(bucketName, file.originalname, file.buffer, (err, etag) => {
            if (err) {
                return res.status(500).send('Error al subir el PDF');
            }
            res.send({ message: 'PDF subido exitosamente', etag });
        });
    },

    // Función para descargar un PDF
    downloadPDF: (req, res) => {
        const { filename } = req.params;
        const bucketName = 'pdf-bucket';

        minioClient.getObject(bucketName, filename, (err, dataStream) => {
            if (err) {
                return res.status(404).send('PDF no encontrado');
            }

            res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
            res.setHeader('Content-Type', 'application/pdf');
            dataStream.pipe(res);
        });
    }
};

module.exports = PdfController;
