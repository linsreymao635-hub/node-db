import Product from "../models/Product.js";
import { BaseController } from "./baseController.js";

class ProductController extends BaseController {
  // GET ALL products
  getProducts = async (req, res) => {
    try {
      const products = await Product.find();
      this.success(res, "Products retrieved successfully", products);
    } catch (error) {
      this.error(res, error.message, 500);
    }
  };

  // GET product by id
  getProductById = async (req, res) => {
    try {
      const product = await Product.get(req.params.id);
      if (!product) {
        return this.error(res, "Product not found", 404);
      }
      this.success(res, "Product retrieved successfully", product);
    } catch (error) {
      this.error(res, error.message, 500);
    }
  };

  // CREATE product
  createProduct = async (req, res) => {
    try {
      const product = await Product.create({
        name: req.body.name,
        price: req.body.price,
        qty: req.body.qty,
        desc: req.body.desc
      });
      this.success(res, "Product created successfully", product, 201);
    } catch (error) {
      this.error(res, error.message, 500);
    }
  };

  // UPDATE product
  updateProduct = async (req, res) => {
    try {
      const product = await Product.update(req.params.id, {
        name: req.body.name,
        price: req.body.price,
        qty: req.body.qty,
        desc: req.body.desc
      });
      if (!product) {
        return this.error(res, "Product not found", 404);
      }
      this.success(res, "Product updated successfully", product);
    } catch (error) {
      this.error(res, error.message, 500);
    }
  };

  // DELETE product
  deleteProduct = async (req, res) => {
    try {
      const deleted = await Product.delete(req.params.id);
      if (!deleted) {
        return this.error(res, "Product not found", 404);
      }
      this.success(res, "Product deleted successfully");
    } catch (error) {
      this.error(res, error.message, 500);
    }
  };
}

export default new ProductController();