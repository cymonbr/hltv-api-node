/* Setando os modulos na aplicação */
var express    = require('express');
var bodyParser = require('body-parser');

/* Iniciando a aplicação com express */
var api        = module.exports = express();

var allowCors  = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.header('Access-Control-Allow-Headers', 'content-type');
    res.header('Access-Control-Allow-Credentials', 'true');

    next();
};

/* Iniciando o body parser */
api.use(allowCors);
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: true }));

/* Seta porta de acesso */
api.listen(3000);