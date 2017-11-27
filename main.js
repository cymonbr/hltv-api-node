var api = require('./modules/api'),
    data = require('./modules/datas'),
    validator = require('validator');

/* Rotas da aplicação */
api.get('/', function(req, res) {
    res.end(`<h2>Consults</h2>
    <div><a href="results">Results</a></div>
    <div><a href="matches">Matches</a></div>
    <div><a href="events">Events</a></div>
    <div><a href="ranking">Ranking</a></div>`);
});

/* Results */
api.get('/results', function(req, res) {
    data.results().then(resp => {
        res.json(resp);
    });
});

/* Matches */
api.get('/matches', function(req, res) {
    data.matches().then(resp => {
        res.json(resp);
    });
});

api.get('/matches/stats/:init/:end', function(req, res) {
    var init = validator.trim(validator.escape(req.params.init));
    var end = validator.trim(validator.escape(req.params.end));
    data.matchesStats(init, end).then(resp => {
        res.json(resp);
    });
});

api.get('/match/:id', function(req, res) {
    var id = validator.trim(validator.escape(req.params.id));
    data.match(id).then(resp => {
        res.json(resp);
    });
});

/* Events */
api.get('/events', function(req, res) {
    res.end(`Not work at`);
});

/* Team */
api.get('/team/stats/:id', function(req, res) {
    var id = validator.trim(validator.escape(req.params.id));
    data.teamStats(id).then(resp => {
        res.json(resp);
    });
});

api.get('/team/ranking', function(req, res) {
    data.teamRanking().then(resp => {
        res.json(resp);
    });
});

api.get('/team/:id', function(req, res) {
    var id = validator.trim(validator.escape(req.params.id));
    data.team(id).then(resp => {
        res.json(resp);
    });
});

/* Streams */
api.get('/streams', function(req, res) {
    data.streams().then(resp => {
        res.json(resp);
    });
});