"use strict";

let R = require('ramda')
    , curry = R.curry
    // , pipe = R.pipe
    // , evolve = R.evolve
;
let mocha = require('mocha')
;
let chai = require('chai')
    , expect = chai.expect
;
describe(`Fn: SRVa_Csd__GVNa_spanNdx    csd -> noonNdx -> ( spanNdx -> rspcCsd )`, () => {
    /**
     * Fn: SRVa_Csd__GVNa_spanNdx
     * Fn: TRIAGE_1
     * @param rspcCsdDict
     * @param noonNdx
     * @param spanNdx
     * @return a CSD
     */
    let SRVa_rspcCsd = require('../src/SRVa_rspcCsd').__GVNa_spanNdx;

    // TEST DATA
    let aSpanColl = {}
        , aNodeList = []
        , parent = {}
        , noonSpan = {}
        , parentChildren = []
        , anotherSpan = {}
        , dfltStyle = {}
    ;
    beforeEach(function () {
        loadFixtures('index.html');
        //      REMEMBER loadFixtures BREAKS a Mocha debug !!
        dfltStyle = require('C:\\Users\\CLIF\\WSProjects\\wbSample\\RSpc\\Dflt_RSpcStyles.js').Dflt;
        console.log(`csd-> ${JSON.stringify(dfltStyle)}`);
        aSpanColl = document.querySelector('.chpt span').children;
        aNodeList = document.querySelectorAll('.chpt span');
        noonSpan = aNodeList[4];
        anotherSpan = aNodeList[1];
        parent = noonSpan.parentElement;
        parentChildren = parent.children;
    });

    it(`expect a div parent to have span children. i.e. a child's siblings.`, () => {
        expect(parentChildren.length).is.equal(52);
        expect(parent.childElementCount).is.equal(52);
    });
    it(`expect a Fn to GET the noonSpan's sibling index. 
        Note: noon does not come WITH an index FROM the event handler.`, () => {
        expect(R.indexOf(noonSpan, parentChildren)).is.equal(4);
        expect(R.flip(R.indexOf)(parentChildren, noonSpan)).is.equal(4);
    });
    it(` expect dfltStyle -> aCsdDict.`, () => {
        expect(dfltStyle).is.a('Object').has.key('am', 'noon', 'pm')
        expect(dfltStyle.am).is.a('Object').to.deep.include({opacity: '0.8'});
    });
    it(` expect SRV_aStyle(csd, 4, 1 ) -> the 'am' readStyle.`, () => {
        expect(SRVa_rspcCsd(dfltStyle, 4, 1)).is.a('Object')
            .has.key('color', 'backgroundColor', 'opacity', 'fontSize')
            .to.deep.include({opacity: '0.8'});
    });
    it(` expect SRV_aStyle(csd, 4, 4 ) -> the 'noon' readStyle.`, () => {
        expect(SRVa_rspcCsd(dfltStyle, 4, 4)).is.a('Object')
            .has.key('color', 'backgroundColor', 'opacity', 'fontSize')
            .to.deep.include({opacity: '1.0'});
    });
    it(` expect SRV_aStyle(csd, 4, 6 ) -> the 'pm' readStyle.`, () => {
        expect(SRVa_rspcCsd(dfltStyle, 4, 6)).is.a('Object')
            .has.key('color', 'backgroundColor', 'opacity', 'fontSize')
            .to.deep.include({opacity: '0.9'});
    });
});
