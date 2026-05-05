<<<<<<< HEAD
class BaseModel {
    static async get(id) {
        throw new Error('Method "get" must be implemented by subclass');
    }

    static async create(data) {
        throw new Error('Method "create" must be implemented by subclass');
    }

    static async update(id, data) {
        throw new Error('Method "update" must be implemented by subclass');
    }

    static async delete(id) {
        throw new Error('Method "delete" must be implemented by subclass');
    }

    static async find(query = {}) {
        throw new Error('Method "find" must be implemented by subclass');
    }
}

export default BaseModel;
=======
export class BaseModel {
  get() {
    throw new Error("Method not implemented");
  }

  create() {
    throw new Error("Method not implemented");
  }

  update() {
    throw new Error("Method not implemented");
  }

  delete() {
    throw new Error("Method not implemented");
  }
}
>>>>>>> bcd69119f11b4adb561e4bcce16252be7b8e0daa
