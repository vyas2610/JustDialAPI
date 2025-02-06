const index = (req, res) => {
  res.send({
    msg: "Hello Data Fetch From Index Method..!",
  });
};

const create = (req, res) => {
  res.send({
    msg: "Data Added..!",
  });
};

const update = (req, res) => {
  res.send({
    msg: "Data Updated..!",
  });
};

const destory = (req, res) => {
  res.send({
    msg: "Data Deleted..!",
  });
};

const details = (req, res) => {
  res.send({
    msg: "Details Get ID Wise",
  });
};

module.exports = { index, create, update, destory, details };
