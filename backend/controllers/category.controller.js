import Category from "../models/category.model.js";

export const getAllCategory = async (req, res) => {
  const categories = await Category.find();
  res.status(200).send(categories);
};

export const getCategory = async (req, res) => {
  const categori = await Category.findOne({ slug: req.params.slug });
  res.status(200).send(categori);
};

export const createCategory = async (req, res) => {
  const newCategory = new Category(req.body);

  const categori = await newCategory.save();
  res.status(200).json(categori);
};

export const deleteCategory = async (req, res) => {
  const categori = await Category.findByIdAndDelete(req.params.id);
  res.status(200).json("Category has been deleted");
};
