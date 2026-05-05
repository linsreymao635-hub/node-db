import db from "../config/db.js";
import BaseModel from "./BaseModel.js";

class Product extends BaseModel {
    constructor(id, name, price, qty, desc) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.qty = qty;
        this.desc = desc;
    }

    static async get(id) {
        const [rows] = await db.query("SELECT * FROM products WHERE id = ?", [id]);
        return rows[0] || null;
    }

    static async create(data) {
        const [result] = await db.query(
          "INSERT INTO products (name, price, qty, desc) VALUES (?, ?, ?, ?)",
          [data.name, data.price, data.qty, data.desc]
        );
        return { id: result.insertId, name: data.name, price: data.price, qty: data.qty, desc: data.desc };
    }

    static async update(id, data) {
        const [result] = await db.query(
          "UPDATE products SET name = ?, price = ?, qty = ?, desc = ? WHERE id = ?",
          [data.name, data.price, data.qty, data.desc, id]
        );
        if (result.affectedRows === 0) return null;
        return { id, name: data.name, price: data.price, qty: data.qty, desc: data.desc };
    }

    static async delete(id) {
        const [result] = await db.query(
          "DELETE FROM products WHERE id = ?",
          [id]
        );
        return result.affectedRows > 0;
    }

    static async find(query = {}) {
        const [rows] = await db.query("SELECT * FROM products");
        return rows;
    }
}

export default Product;