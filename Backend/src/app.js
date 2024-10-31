const express = require('express');
const bookRoutes = require('./api/routes/library/bookRoutes');

const app = express();

app.use(express.json());
app.use('/MATERIAL_BIBLIOGRAFICO', bookRoutes);

app.use((error, req, res, next) => {
    console.error('Error stack:', error.stack);
    res.status(500).json({ error: error.message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});