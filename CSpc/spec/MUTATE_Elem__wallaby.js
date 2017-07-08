"use strict";
//
// let R = require('ramda')
// , evolve = R.evolve
// , curry = R.curry
// , pipe = R.pipe
// ;
let M = require('mocha')
;
let chai = require('chai')
    // , should = chai.should()
    , expect = chai.expect
;
describe(`    MUTATE_:: mutates a span UPDATING its.style property.
        @sig  csdDCT -> ( SPAN -> SPAN )
        Typically its form: MUTATE_frmCsdDCT aka SERV_mutatedElem_frmCsdDCT is used. 
     `, function () {
    //   TEST DATA
    let STUB_CSD = {opacity: "0.5", color: "green"};
    let STUB_ELEM = {style: {opacity: 1, color: ''}};
    // CODE UNDER TEST
    let MUTATE_ = require('../src/MUTATE_Elem').MUTATE_;
    let MUTATE_frmCsdDCT = MUTATE_(STUB_CSD);
    let SERV_mutatedElem_frmCsdDCT = MUTATE_(STUB_CSD);

    beforeEach(function () {
        loadFixtures('index.html'); //REMEMBER this BREAKS a Mocha debug !!
    });

    describe(`{MUTATE_                      } Fn:(CsdDCT) ->Fn(ELEM -> ELEM)
        `, function () {
        it(`expects a Fn of arity:2; expecting a Span.`, () => {
            expect(MUTATE_).is.a('Function').and.is.length(2);
        });
    });
    describe(`{MUTATE_frmCsdDCT = MUTATE_( CsdDCT )  } Fn(ELEM -> ELEM)
        `, function () {
        it(`expects a  Fn of arity:1; expecting a Span.`, () => {
            expect(MUTATE_frmCsdDCT).is.a('Function').and.is.length(1);
        });
    });
    describe(`{aka SERV_mutatedElem_frmCsdDCT === MUTATE_frmCsdDCT    } Fn(ELEM -> ELEM)
        `, function () {
        it(`expects an Element Obj `, () => {
            expect(MUTATE_frmCsdDCT(STUB_ELEM)).is.a('Object')
                .and.is.property('style')
                .and.is.property("opacity", "0.5")
            ;
        });
    });
});