const TMDBService = require(`../services/TMDBService`);

module.exports = {
    searchMovie: (req, res) => {
        if (!req.params.title) {
            res.send("Required information is missing");
        } else {
            TMDBService.searchTMDB('movie', req.params.title).then((data) => {
                res.send(data);
            }).catch((err) => {
                res.send(err.message);
            });
        }
    },
};

module.exports = {
    get: (req, res) => {
            TMDBService.get().then((data) => {
                res.send(data);
            }).catch((err) => {
                res.send(err.message);
            });

    },
};