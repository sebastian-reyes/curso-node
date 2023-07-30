const controller = {};

controller.index = (req, res) => {
  console.log("Un cliente se ha conectado");
  res.send("La conexión ha sido correcta desde index.controller");
};

export default controller;
