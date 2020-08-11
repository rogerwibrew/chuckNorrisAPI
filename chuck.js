const axios = require("axios").default;

const getChuck = () => {
  return axios
    .get("http://api.icndb.com/jokes/random")
    .then((response) => {
      return response.data.value.joke;
    })
    .catch((error) => {
      return error.code;
    })
    .finally(() => {});
};

module.exports = getChuck;
