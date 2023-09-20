import axios from "axios";

const get_all = async () => {
  const res = await axios.get(
    "https://api.midas-stones.com/ActuCrud/lists_paging?page=1&perPage=10"
  );
  return res;
};

module.exports = {
  get_all,
};
