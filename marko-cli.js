module.exports = function(markoCli) {
    markoCli.config.mochaOptions = {
        timeout: 5000,
        colors: true
    };

    markoCli.config.browserBuilder = {
        plugins: [
            'lasso-marko'
        ],
        require: {
           transforms: [
               {
                   transform: 'lasso-babel-transform'
               }
           ]
        }
    };
};
