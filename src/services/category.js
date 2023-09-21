import axios from "axios";

const getAll = async () => {
  let res = [];
  res = await axios.get(`https://api.midas-stones.com/ActuCrud/lists_category`);
  return res;
};

const getCategoryProducts = async (id) => {
  let res = [];
  res = await axios.get(
    `https://api.midas-stones.com/ActuCrud/lists_by_category/${id}?page=1&perPage=20`
  );
  return res;
};

module.exports = {
  getAll,
  getCategoryProducts,
};
