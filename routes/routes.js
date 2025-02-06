const ArticalControllers = require("../controllers/ArticalController");

const routes = (app) => {
  app.get("/", ArticalControllers.index); // get use for fetch data
  app.post("/articals", ArticalControllers.create); // post used to add data
  app.put("/articals/:id", ArticalControllers.update); // put used for update data
  app.delete("/articals/:id", ArticalControllers.destory); // delete used for delete data
  app.get("/articals/:id", ArticalControllers.details);
};

module.exports = routes;
