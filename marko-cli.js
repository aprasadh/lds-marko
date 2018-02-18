module.exports = function(markoCli) {
    markoCli.config.mochaOptions = {
        timeout: 5000,
        colors: true,
        debug: true
    };
};