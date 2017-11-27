var { HLTV } = require('hltv');

var datas = module.exports = {
    results: () => {
        return HLTV.getResults({ pages: 1 }).then(resp => {
            return resp;
        });
    },
    matches: () => {
        return HLTV.getMatches().then(resp => {
            return resp;
        });
    },
    matchesStats: (init, end) => {
        return HLTV.getMatchesStats({ startDate: init, endDate: end }).then(resp => {
            return resp;
        })
    },
    match: (id) => {
        return HLTV.getMatch({ id: id }).then(resp => {
            return resp;
        })
    },
    events: () => {
        return HLTV.getResults({ pages: 1 }).then(resp => {
            return resp;
        });
    },
    team: (id) => {
        return HLTV.getTeam({id: id}).then(resp => {
            return resp;
        });
    },
    teamStats: (id) => {
        return HLTV.getTeamStats({id: id}).then(resp => {
            return resp;
        });
    },
    teamRanking: () => {
        return HLTV.getTeamRanking({year: '2017', month: 'november', day: '20'}).then(resp => {
            return resp;
        });
    },
    streams: () => {
        return HLTV.getStreams().then(resp => {
            return resp;
        });
    }
};