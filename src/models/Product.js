import { db } from "../config/db.js";
import { BaseModel } from "./BaseModel.js";

class Product extends BaseModel {

    async get() {
        const [rows] = await db.execute("SELECT * FROM product");
        return rows;
    }

    async create(name, price, description, stock) {
        const [result] = await db.execute(
            "INSERT INTO product (name, price, description, stock) VALUES (?, ?, ?, ?)",
            [name, price, description, stock]
        );
        return result.insertId;
    }

    async update(id, name, price, description, stock) {
        const [result] = await db.execute(
            "UPDATE product SET name = ?, price = ?, description = ?, stock = ? WHERE id = ?",
            [name, price, description, stock, id]
        );
        return result.affectedRows;
    }

    async delete(id) {
        const [result] = await db.execute(
            "DELETE FROM product WHERE id = ?",
            [id]
        );
        return result.affectedRows;
    }

    async searchProduct(keyword) {
        const [rows] = await db.execute(
            "SELECT * FROM product WHERE name LIKE ?",
            [`%${keyword}%`]
        );
        return rows;
    }
}

export default new Product();