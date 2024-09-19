// Importando as dependências
const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const enableHotReload = require("./hot-reload");

// Puxando os controladores da aplicação
const controllerIndex = require("./controllers/controllerIndex")

// Chamando o express
const app = express();

// Configurações do body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// Configurações do seu app Express
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

console.log("Views path set to:", path.join(__dirname, "views"));

// Configuração de pasta pública
app.use(express.static(path.join(__dirname, "public")));

// Habilitar hot-reload
enableHotReload(app);

// Rotas das paginas
app.get("/", controllerIndex.exibirIndex);

// Inicie o servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});