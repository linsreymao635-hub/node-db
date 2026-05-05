<<<<<<< HEAD
import db from "../config/db.js";
import BaseModel from "./BaseModel.js";

class User extends BaseModel {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    static async get(id) {
        const [rows] = await db.query("SELECT * FROM users WHERE id = ?", [id]);
        return rows[0] || null;
    }

    static async create(data) {
        const [result] = await db.query(
          "INSERT INTO users (name) VALUES (?)",
          [data.name]
        );
        return { id: result.insertId, name: data.name };
    }

    static async update(id, data) {
        const [result] = await db.query(
          "UPDATE users SET name = ? WHERE id = ?",
          [data.name, id]
        );
        if (result.affectedRows === 0) return null;
        return { id, name: data.name };
=======
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
>>>>>>> bcd69119f11b4adb561e4bcce16252be7b8e0daa
    }

    searchUser(keyword) {
        console.log("Search Users:", keyword);
    }

    static async find(query = {}) {
        const [rows] = await db.query("SELECT * FROM users");
        return rows;
    }
}

export default new User();