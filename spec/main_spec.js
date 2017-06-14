/**
 spec/main_spec.js
 */
"use strict";

let R = require('ramda')
    // , pipe = R.pipe
    // , curry = R.curry
//     , compose = R.compose
//     , map = R.map
;

let chai = require('chai')
    // , should = chai.should()
    , expect = chai.expect
;

// CODE UNDER TEST
// let main = require('../main');

describe(`Fn: main 
    The ChptSpace modules are only responsible for mutating the DOM: the div.chptr in this case.
        I am not testing ChptSpace functions
    In ReadSpace each span.Verse continually get a new contexts [indexes an place in family], as the Reader changes focus, changes Verses.
    In StylSpace those context reassignments are reflected onto each element's style attributes. 

    `, function () {
    describe(`ReadSpace.resizeRSpcFn(arity:2) -> RSpcSizeObj
    it is PARTIALED with the FocusNnd in the main_keyEventFn, thus RETURNING a Fn
    it will be FULFILLED with the CSpcListLength [at the final invoking]
    it will RETURN a dictObj of three RClss object: keyName: keySize
    `, function () {
    });

    // describe(`ReadSpace.transformIndexFn(arity:2) -> RSpcIndex
    // it is PARTIALED with the CSpcIndex
    // it will be FULFILLED with the RSpcSizeObj [at the final invoking]
    // it will RETURN the appropriate RSpcIndex associated w/ the CSpcIndex argument.
    // `, function () {
    // });
    //
    // describe(`StylSpace.transformStyl_bgColorFn(arity:2) -> {bgColor:{Fn -> bgColor:value}}
    // it is PARTIALED with the RSpcIndex
    // it will be FULFILLED with the SSpc.evolveFn [at the final invoking]
    // it will RETURN a new bgColorCSD.
    // `, function () {
    // });
    // describe(`StylSpace.transformStyl_opacity(arity:2) -> {opacity:{Fn -> {opacity:value}}
    // it is PARTIALED with the RSpcIndex
    // it will be FULFILLED with the SSpc.evolveFn [at the final invoking]
    // it will RETURN a new bgColorCSD.
    // `, function () {
    // });
    // describe(`StylSpace.transformStyl_fontSize(arity:2) -> {fontSize: (Fn -> {fontSize:value}}
    // it is PARTIALED with the RSpcIndex
    // it will be FULFILLED with the SSpc.evolveFn [at the final invoking]
    // it will RETURN a new fontSizeCSD.
    // `, function () {
    // });
    // describe(`StylSpace.EVOLVE_CSD??????? TODO COMPLETE THIS. iT COMES AFTER THE ABOVE TRANSFORMS.
    // `, function () {
    // })
});

