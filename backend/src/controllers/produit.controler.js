import { createProduct, getProducts } from "../models/produit.model.js";
import { produitSchema } from "../validation/produit.validation.js";

export const getAllProduct = async (req, res) => {
    try {
        const produits = await getProducts()
        res.json(produits)
    } catch (error) {
        console.error("Erreur dans la récupération des produits", error.message)
        res.status(500).json({ message: "Erreur serveur dans la récupération des produits" })
    }
};

export const createProduit = async (req, res) => {
    try {
        const { nom, prix, description } = req.body
        const image = req.files ? req.file.filename : null

        const { error } = produitSchema.validate({ nom, prix, description })

        if (error) {
            return res.status(400).json({ message: error.details[0].message })
        }
        await createProduct({ nom, prix, description, image })

        res.status(201).json({ message: "Produit crée" })

    } catch (error) {
        console.error('Erreur dans la création du produit', error.message)
        res.status(500).json({ message: "Erreur serveur lors de la création du produit" })

    }
}
