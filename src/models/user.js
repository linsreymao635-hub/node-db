import { db } from "../config/db.js";
import { BaseModel } from "./BaseModel.js";

class User extends BaseModel {

    async get() {
        const [rows] = await db.execute("SELECT * FROM users");
        return rows;
    }

    async create(name) {
        const [result] = await db.execute(
            "INSERT INTO users (name) VALUES (?)",
            [name]
        );
        return result.insertId;
    }

    async update(id, name) {
        const [result] = await db.execute(
            "UPDATE users SET name = ? WHERE id = ?",
            [name, id]
        );
        return result.affectedRows;
    }

    async delete(id) {
        const [result] = await db.execute(
            "DELETE FROM users WHERE id = ?",
            [id]
        );
        return result.affectedRows;
    }

    searchUser(keyword) {
        console.log("Search Users:", keyword);
    }
}

export default new User();