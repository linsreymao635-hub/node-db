import db from "../config/db.js";

class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    // static method : get all users
    static async getAll() {
        const [rows] = await db.query("SELECT * FROM users");
        return rows;
    }

    // Static method: create user
    static async create(name) {
        const [result] = await db.query(
          "INSERT INTO users (name) VALUES (?)",
          [name]
        );
        return result;
    }
}

export default User;