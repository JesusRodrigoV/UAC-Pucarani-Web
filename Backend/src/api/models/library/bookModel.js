const db = require('../../../config/database');

const BookModel = {
    getAll: async () => {
        const query = {
            text: `
            SELECT * FROM material_bibliografico
            ORDER BY id_matbib
            `
        }
        const { rows } = await db.query(query);
        return rows;
    },

    getById: async (id) => {
        const query = 'SELECT * FROM material_bibliografico WHERE id_matbib = $1';
        const { rows } = await db.query(query, [id]);
        return rows[0];
    },

    create: async ({ id_matbib, type_matbib, title_matbib, author_matbib, isbn_matbib, filename, lenguage_matbib, description_matbib, summary_matbib, content_matbib, collaborators }) => {
        const query = {
            text: `
            INSERT INTO material_bibliografico (id_matbib, type_matbib, title_matbib, author_matbib, isbn_matbib, filename, lenguage_matbib, description_matbib, summary_matbib, content_matbib, collaborators)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *
            `,
            values: [id_matbib, type_matbib, title_matbib, author_matbib, isbn_matbib, filename, lenguage_matbib, description_matbib, summary_matbib, content_matbib, collaborators]
        }
        const { rows } = await db.query(query);
        return rows[0];
    },

    update: async (id_matbib, { type_matbib, title_matbib, author_matbib, isbn_matbib, filename, lenguage_matbib, description_matbib, summary_matbib, content_matbib, collaborators }) => {
        const query = {
            text: `
            UPDATE material_bibliografico
            SET type_matbib = $1, title_matbib = $2, author_matbib = $3, isbn_matbib = $4, filename = $5, lenguage_matbib = $6, description_matbib = $7, summary_matbib = $8, content_matbib = $9, collaborators = $10
            WHERE id_matbib = $11 RETURNING *
            `,
            values: [type_matbib, title_matbib, author_matbib, isbn_matbib, filename, lenguage_matbib, description_matbib, summary_matbib, content_matbib, collaborators, id_matbib]
        }
        const { rows } = await db.query(query);
        return rows[0];
    },

    delete: async (id) => {
        const query = 'DELETE FROM material_bibliografico WHERE id_matbib = $1 RETURNING *';
        const { rows } = await db.query(query, [id]);
        return rows[0];
    },
};

module.exports = BookModel;
