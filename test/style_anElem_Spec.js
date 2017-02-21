/**
 * Created by CLIF on 1/19/2017.
 */
"use strict";

let R = require('ramda');
let compose = R.compose;

let mocha = require('mocha');
let describe = mocha.describe;
let it = mocha.it;
//
let chai = require('chai'),
    expect = chai.expect,
    should = chai.should();

// let weight_aReadClss_Elem; // S->L->N -> N
// weight_aReadClss_Elem = require('weight_aReadClss_Elem');
// let _formatOpacity; // a -> STR
// _formatOpacity = require('../test/format_anElem_Style')._formatOpacity;

//HELPER
let set_aCSD = () => {
};
let transformations = {
    opacity: R.identity('0.56'),
    fontSize:R.identity('76%')
};

//BUILD style_anElem HERE then move to src/
// style_anElem = require('../src/style_anElem');
/**
 *style_anElem
 * mutate an ELEM's style object.
 * first get an elem.style object: style =
 * transform the CSD given some functions
 * set elem.style
 * return the element
 */
let style_anElem;// N -> STR

style_anElem = R.curry(
    (elem) => {
        let thisCsd = elem.style;
        thisCsd = R.evolve(transformations)(thisCsd);
        return elem
    });

describe(`style_anElem:: ELEM -> ELEM
`, function () {
    let fn, chptSpns, aSpan, anElem, aStyleObj;
    mocha.beforeEach(function () {
        loadFixtures('index.html');
        chptSpns = document.querySelectorAll(".chptr span");
        anElem = R.nth(0)(chptSpns);
        aStyleObj = anElem.style;
        fn = style_anElem;
    });
    describe(`context: the function ITSELF
`, function () {
        it(`should be a function..`, () => {
            style_anElem.should.be.a('function');
        });
    });
    describe(`context: function INVOKED..
`, () => {
        it(`should return and be equal to the @parm: elem`, () => {
            style_anElem(anElem).should.be.an('object').and.deep.equal(anElem)
        });
        it(`should have a new elem.style.opacity property`, () => {
            style_anElem(anElem).style.opacity.should.not.equal('');
        });
    });
    describe(` elem.style && aStyleObj=elem.style are CSSStyleDeclarations Objects and equal each other
`, () => {
        it(`should exist and be an object`, () => {
            anElem.style.should.exist.and.be.a('Object');
            anElem.style.should.equal(aStyleObj);
        });
    });
    describe(`both elem.style && aStyleObj should set single style properties
`, () => {
        it(`anElem.style.fontSize = '75% should set a property.`, () => {
            anElem.style.fontSize = '75%';
            anElem.style.fontSize.should.equal('75%');
            aStyleObj.fontSize.should.equal('75%');
        });
        it(` both elem.style && aStyleObj should set properties`, () => {
            aStyleObj.opacity = '0.55';
            anElem.style.opacity.should.equal('0.55');
        });
    });
});