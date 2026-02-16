import { db } from "../config.db.js";

export const createProduct = async () => {
    try {
        await db.query(
            `INSERT INTO produits (nom, prix, description, image) VALUES (?,?,?,?)`[data.nom, data.prix, data.description, data.image],
        );
    } catch (error) {
        console.error('Erreur lors de la création du produit', error.message)
        throw error;
    }
};

export const getProducts = async () => {
    try {
        const [rows] = await db.query(`SELECT * FROM produits`)
        return rows;
    } catch (error) {
        console.error(" Erreur lors de la récupération des produits", error.message)
        throw error;
    }
};