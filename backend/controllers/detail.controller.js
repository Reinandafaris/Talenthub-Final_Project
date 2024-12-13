import Detail from "../models/detail.model.js";

export const getAllDetail = async (req, res) => {
  const details = await Detail.find();
  res.status(200).send(details);
};

export const getDetail = async (req, res) => {
  const detail = await Detail.findOne({ slug: req.params.slug });
  res.status(200).send(detail);
};

export const createDetail = async (req, res) => {
  const newDetail = new Detail(req.body);

  const detail = await newDetail.save();
  res.status(200).json(detail);
};

export const updateDetail = async (req, res) => {
  const detail = await Detail.findById(req.params.id);
  detail.set(req.body);

  await detail.save();
  res.status(200).json(detail);
};

export const deleteDetail = async (req, res) => {
  const detail = await Detail.findByIdAndDelete(req.params.id);
  res.status(200).json("Detail has been deleted");
};
