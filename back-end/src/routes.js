//esse arquivo tem como resposabilidade cadastrar as rotas a aplicação

const express = require("express");

const routes = express.Router();

const usuarioController = require("./controllers/usuario")

routes.post("/usuario", usuarioController.store);
routes.get("/usuario",usuarioController.listar);
routes.get("/usuario/:id",usuarioController.buscarPorId)

module.exports = routes;