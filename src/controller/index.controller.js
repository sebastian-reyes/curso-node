const controller = {};
const title = "Index desde el servidor con PUG y una variable";

controller.index = (req, res) => {
  console.log("Un cliente se ha conectado");
  res.render("index", { title });
};

export default controller;
