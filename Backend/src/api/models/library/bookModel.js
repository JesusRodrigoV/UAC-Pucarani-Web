const db = require('../../../config/database'); 

const BookModel = {
    getAll: async () => {
        const query = 'SELECT * FROM material_bibliografico';
        const { rows } = await db.query(query);
        return rows;
    },

    getById: async (id) => {
        const query = 'SELECT * FROM material_bibliografico WHERE id_matbib = $1';
        const { rows } = await db.query(query, [id]);
        return rows[0];
    },

    create: async ({ type, title, author, description }) => {
        const query = `
            INSERT INTO material_bibliografico (type_matbib, title_matbib, author_matbib, description_matbib)
            VALUES ($1, $2, $3, $4) RETURNING *
        `;
        const { rows } = await db.query(query, [type, title, author, description]);
        return rows[0];
    },

    update: async (id, { type, title, author, description }) => {
        const query = `
            UPDATE material_bibliografico
            SET type_matbib = $1, title_matbib = $2, author_matbib = $3, description_matbib = $4
            WHERE id_matbib = $5 RETURNING *
        `;
        const { rows } = await db.query(query, [type, title, author, description, id]);
        return rows[0];
    },

    delete: async (id) => {
        const query = 'DELETE FROM material_bibliografico WHERE id_matbib = $1 RETURNING *';
        const { rows } = await db.query(query, [id]);
        return rows[0];
    },
};

module.exports = BookModel;
