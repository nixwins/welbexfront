import Router from './router.js'

Router.init();
Handlebars.registerHelper('times', function(n, block) {
    var accum = '';
    for(var i = 1; i < n; ++i)
        accum += block.fn(i);
    return accum;
});

