/**
 * EVOLVE_Csd.js
 */
"use strict";
let R = require('ramda')
    // , evolve = R.evolve
    // , curry = R.curry
// , pipe = R.pipe
//     , compose = R.compose
;
let chai = require('chai')
    // , should = chai.should()
    , expect = chai.expect
;

describe(`Fn: SRV_StyleCsd             SERVES a styleCsd given      
    (1) a StyleCsd_Dflt
    (2) a StyleCsd_byReadClassKey given byReadClassKey
    `, () => {
    // TEST DATA
    // CODE UNDER TEST
    let SRV_StyleCsd_Dflt = require('../src/SRV_StyleCsd').Dflt; // -> {{},{},{}}
    it(`expects SRV_StyleCsd_Dflt             -> an CSD Object with keys.
    `, function () {
        expect(SRV_StyleCsd_Dflt).is.a('Object').is.keys('am', 'noon', 'pm');
    });
    // CODE UNDER TEST
    let SRV_StyleCsd_byReadClassKey = require('../src/SRV_StyleCsd').byReadClassKey; // -> {{},{},{}}

    it(`expects SRV_StyleCsd_frmKey( key )  -> a style Csd.
    `, function () {
        expect(SRV_StyleCsd_byReadClassKey('pm'),
            "PROBABLY the backgounrColor WILL CHANGE in future tests " +
            "AND BREAK this TEST").is.a('Object').has.property('backgroundColor')
            .and.equal('green')
        ;
    });
});

