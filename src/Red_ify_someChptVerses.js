"use strict";
let R = require('ramda')
    , curry = R.curry
    , pipe = R.pipe
;
let h = require('../h/H');


// ************* FUNCTIONS
let mutate_anAttr = require('../h/alter/anElemStyleAttr');
let Redify_anAtttr = mutate_anAttr("color:red");
let redify_anElem = curry(
    /**
     *
     * @param el
     * @param ndx
     * @param set
     * @return : a modified Elem
     */
    (el, ndx, set) => Redify_anAtttr(el)
);

// ************* DATA
let select_aFewVerses = R.slice(9, 11); // SET -> SET
let ret_allChprVerses = doc => doc.querySelectorAll('div .chptr, span'); // (doc) -> SET
let aSet = pipe(ret_allChprVerses, select_aFewVerses); // SET -> SET

// ************* MAIN: CodeUnderTest:: MAP_aSet(FN)(DATA)
let MAP_aSet = require('../h/alter/aSet'); // (Fn -> SET) -> SET

const RED_ify_someChptVerses = doc => MAP_aSet(redify_anElem, aSet(doc));

// ************* INVOKE this Fn as the main
module.exports = RED_ify_someChptVerses; // Document -> [Verses]