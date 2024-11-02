const db = require('../../../config/database'); 

const BookModel = {
    getAll: async () => {
        const query = {
            text: `
            SELECT * FROM material_bibliografico
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

    create: async({ type_matbib, title_matbib, author_matbib, description_matbib }) => {
        const query = {
            text: `
            INSERT INTO material_bibliografico (type_matbib, title_matbib, author_matbib, description_matbib)
            VALUES ($1, $2, $3, $4) RETURNING *
            `,
            values: [type_matbib, title_matbib, author_matbib, description_matbib]
        }
        const { rows } = await db.query(query);
        return rows[0];
    },

    update: async (id_matbib, { type_matbib, title_matbib, author_matbib, description_matbib }) => {
        const query = {
            text: `
            UPDATE material_bibliografico
            SET type_matbib = $1, title_matbib = $2, author_matbib = $3, description_matbib = $4
            WHERE id_matbib = $5 RETURNING *
            `,
            values: [type_matbib, title_matbib, author_matbib, description_matbib, id_matbib]
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
