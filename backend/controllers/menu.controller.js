import Menu from "../models/menu.model.js";

export const getAllMenu = async (req, res) => {
  const menus = await Menu.find();
  res.status(200).send(menus);
};

export const getMenu = async (req, res) => {
  const menu = await Menu.findOne({ slug: req.params.slug });
  res.status(200).send(menu);
};

export const createMenu = async (req, res) => {
  const newMenu = new Menu(req.body);

  const menu = await newMenu.save();
  res.status(200).json(menu);
};

export const deleteMenu = async (req, res) => {
  const menu = await Menu.findByIdAndDelete(req.params.id);
  res.status(200).json("Menu has been deleted");
};
