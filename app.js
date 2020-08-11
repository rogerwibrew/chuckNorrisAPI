const getChuck = require("chuck");

getChuck()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
