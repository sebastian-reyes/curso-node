import express from "express";
import router from "./routes/index.routes.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express();

//Creando servidor
app.listen(3000, () => {
  console.log("Servidor a la espera de conexiones");
});

app.set('view engine', 'pug')
app.set('views',path.join(__dirname, 'views'))

const rutas = router;

//Rutas
app.use(rutas);

//Static files
app.use(express.static(path.join(__dirname,'../public')))
console.log(__dirname);
console.log(path.join(__dirname,'../public'));

app.use((req, res) => {
  res.sendFile(path.join(__dirname,"../public/404.html"));
});
