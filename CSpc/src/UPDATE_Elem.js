/**
 * UPDATE_Element_test
 * DO NOT DELETE - the function form is good; do not loose it! 170605
 */
"use strict";

let R = require('ramda')
    , curry = R.curry
    , pipe = R.pipe
;

let UPDATE_ = curry(
    /**
     * ..... UPDATE_():; DICT -> ELEM -> ELEM is the base Fn that updates EACH  Element's style.
     * SYMB: {UPDATE_byElem} Fn:( ELEM) {UPDATE_byElem(DICT.CSD)} ->  ELEM
     *
     * @param a_csd  : a DICT of the new style.CSD
     * @param elem  : a HTML Elem WITH a Style attribute
     * @return {*} : updated_elem
     */
    (a_csd, elem) => {
        for (let property in a_csd)
            elem.style[property] = a_csd[property];
        return elem
    }
);

/**
 * //`UPDATE_ = (CSD)(ELEM) {Fn:UPDATE_} -> ELEM
 */
module.exports = UPDATE_;   // (CSD) (ELEM) {Fn:UPDATE_} -> ELEM

module.exports.byElem = curry(
    csd => UPDATE_(csd)
);                          //(CSD) {Fn:UPDATE_((ELEM))} -> ELEM
module.exports.byCSD = curry(
    el => UPDATE_(R.__, el)
);                          // (ELEM) {Fn:UPDATE_((CSD))} -> ELEM
// NEW as of 170607
module.exports._ELEM = UPDATE_;

let STUB_CSD = {"opacity": "0.5", "backgroundColor": "blue"};
// let CSD_byTrnsfrm = require('../../SSpc/src/EVOLVE_Style').CSD_byTrnsfrm;

module.exports._byTrnsfrm = curry(
    UPDATE_(STUB_CSD, R.__)
); //ACTUAL  (ELEM) {Fn:_ELEM_byTrnsfrm( aCSD ))} -> ELEM
// ); //DESIRED  (ELEM) {Fn:_ELEM_byTrnsfrm(Fn:(Trnsfrm))} -> ELEM
