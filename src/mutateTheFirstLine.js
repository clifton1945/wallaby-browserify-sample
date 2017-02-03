/**
 * Created by CLIF on 1/29/2017.
 */
"use strict";

let R = require('ramda'),
    curry = R.curry,
    compose = R.compose;

/**
 *      ..... myTap::
 */
const myTap = require('../h/myTap');
/**
 *  ..... pureElemQuery1:: STR -> (DOC -> ELEM)
 */
let pureElemQuery1 = require('../h/pureElemQuery1'); // STR -> (DOC -> ELEM);
/**
 *  ..... getTheFirstElem:: DOC -> Elem
 */
let getTheFirstElem = pureElemQuery1('#theFirst');//DOC -> ELEM

/**
 *  ..... getElem_styleOBJ = elt=>elt.style;// ELEM -> CSD
 */
const getElem_styleOBJ = elt => elt.style;

/**
 *  ..... restyle_aCSD:: LST.propName -> LST. propValu  -> DICT.CSD
 *
 */
const restyle_aCSD = require('../src/restyle_aCSD');


/**
 *  ..... mutateTheFirstLine:: DOC -> DOC
 */
module.exports = curry(
    doc => {
        let csdKeys = ['opacity', 'color', 'fontSize'];
        let csdVals = ['0.4', 'green', '60%'];
        let CSD = restyle_aCSD(csdKeys, csdVals);// -> DICT:CSD

        //NOTE use of font-size, not fontSize in setAttribute string!!
        let strCSS = `opacity:${CSD.opacity}; color: ${CSD.color};  font-size: ${CSD.fontSize}`;

        let elem = compose(getTheFirstElem)(doc);
        elem.setAttribute('style', strCSS);
        // elem.setAttribute('style', 'opacity: 0.4; color: green; font-size: 60%');
        return doc
    }
);

