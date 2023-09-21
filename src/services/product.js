import axios from "axios";

const get_all = async () => {
  let all = [];
  let page = 1;
  while (true) {
    let res = await axios.get(
      `https://api.midas-stones.com/ActuCrud/lists_paging?page=${page}&perPage=2`
    );
    if (res && res.data && res.data.data) {
      all = [...all, ...res.data.data];
      if (res.data.currentPage + 1 <= res.data.totalPages) {
        page++;
      } else {
        break;
      }
    }
  }

  return all;
};

module.exports = {
  get_all,
};
