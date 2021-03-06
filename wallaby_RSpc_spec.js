"use strict";

let wallabify = require('wallabify');
let wallabyPostprocessor = wallabify({
        // browserify options, such as
        // insertGlobals: false
    }
    // you may also pass an initializer function to chain other
    // browserify options, such as transformers
    // , b => b.exclude('mkdirp').transform(require('babelify'))
);

module.exports = function (wallaby) {
    return {
        files: [
            {pattern: 'node_modules/jquery/dist/jquery.js', instrument: false},
            {pattern: 'node_modules/jasmine-jquery/lib/jasmine-jquery.js', instrument: false},
            {pattern: 'CSpc/src/*.js', load: false},
            {pattern: 'CSpc/Dflt*.js', load: false},
            {pattern: 'RSpc/src/*.js', load: false},
            {pattern: 'RSpc/Dflt*.js', load: false},
            {pattern: 'SSpc/src/*.js', load: false},
            {pattern: 'h/*.js', load: false},
            {pattern: 'main.js', load: false},
            {pattern: 'index.html', load: false}
        ],

        tests: [
            {pattern: 'RSpc/spec/*_spec.js', load: false},
        ],

        compilers: {
            '**/*.js': wallaby.compilers.babel({
                presets: ['es2015']
            })
        },

        postprocessor: wallabyPostprocessor,

        setup: function () {
            jasmine.getFixtures().fixturesPath = '';
            // required to trigger tests loading
            window.__moduleBundler.loadTests();
        }
    };
};
