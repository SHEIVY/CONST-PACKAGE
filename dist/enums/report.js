"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hativot = exports.priority = exports.evacutionOperation = exports.liftingMethod = exports.liftTypes = exports.fencingStatus = exports.signageStatus = exports.pikudim = exports.sadamsTypes = exports.divisions = exports.reportsType = exports.gibovType = exports.eventsType = exports.unit = exports.statusReport = void 0;
var statusReport;
(function (statusReport) {
    statusReport["waitingApproval"] = "\u05DE\u05D7\u05DB\u05D4 \u05DC\u05D0\u05D9\u05E9\u05D5\u05E8";
    statusReport["approved"] = "\u05DE\u05D0\u05D5\u05E9\u05E8";
    statusReport["notApproved"] = "\u05E1\u05D5\u05E8\u05D1";
    statusReport["draft"] = "\u05D8\u05D9\u05D5\u05D8\u05D4";
})(statusReport || (exports.statusReport = statusReport = {}));
var unit;
(function (unit) {
    unit["north"] = "\u05E6\u05E4\u05D5\u05DF";
    unit["central"] = "\u05DE\u05E8\u05DB\u05D6";
    unit["South"] = "\u05D3\u05E8\u05D5\u05DD";
})(unit || (exports.unit = unit = {}));
var eventsType;
(function (eventsType) {
    eventsType["uncontrolledEntranceToSadam"] = "\u05DB\u05E0\u05D9\u05E1\u05D4 \u05DC\u05D0 \u05DE\u05D1\u05D5\u05E7\u05E8\u05EA \u05DC\u05E9\u05D3\"\u05DD";
    eventsType["extractionFromSadam"] = "\u05D7\u05D9\u05DC\u05D5\u05E5 \u05DE\u05E9\u05D3\"\u05DD";
    eventsType["driftingMinesInSadam"] = "\u05D4\u05D9\u05E1\u05D7\u05E4\u05D5\u05EA \u05DE\u05D5\u05E7\u05E9\u05D9\u05DD \u05D1\u05E9\u05D3\"\u05DD";
    eventsType["copyingMinesByAnimals"] = "\u05D4\u05E2\u05EA\u05E7\u05EA \u05DE\u05D5\u05E7\u05E9\u05D9\u05DD \u05E2\"\u05D9 \u05D1\u05E2\"\u05D7";
    eventsType["sheSteppedOnAMin"] = "\u05E2\u05DC\u05D9\u05D4 \u05E2\u05DC \u05DE\u05D5\u05E7\u05E9";
    eventsType["explosionInSadam"] = "\u05E4\u05D9\u05E6\u05D5\u05E5 \u05D1\u05E9\u05D3\"\u05DD";
    eventsType["theftOfMinesFromSadam"] = "\u05D2\u05E0\u05D9\u05D1\u05EA \u05DE\u05D5\u05E7\u05E9\u05D9\u05DD \u05DE\u05E9\u05D3\"\u05DD";
    eventsType["throwingMines"] = "\u05D6\u05E8\u05D9\u05E7\u05EA \u05DE\u05D5\u05E7\u05E9\u05D9\u05DD";
    eventsType["toViolateInTheSadamN"] = "\u05D4\u05E4\u05E8\u05D4 \u05D1\u05E9\u05D3\"\u05DD \u05E0\"\u05D0";
    eventsType["mineDetection"] = "\u05D2\u05D9\u05DC\u05D5\u05D9 \u05DE\u05D5\u05E7\u05E9\u05D9\u05DD";
    eventsType["administrative"] = "\u05DE\u05E0\u05D4\u05DC\u05D9";
    eventsType["other"] = "\u05D0\u05D7\u05E8";
})(eventsType || (exports.eventsType = eventsType = {}));
var gibovType;
(function (gibovType) {
    gibovType["crissCross"] = "\u05E9\u05EA\u05D9 \u05D5\u05E2\u05E8\u05D1";
    gibovType["rows"] = "\u05E9\u05D5\u05E8\u05D5\u05EA";
})(gibovType || (exports.gibovType = gibovType = {}));
var reportsType;
(function (reportsType) {
    reportsType["review"] = "\u05D1\u05D9\u05E7\u05D5\u05E8\u05EA";
    reportsType["lift"] = "\u05D4\u05E8\u05DE\u05D4";
    reportsType["gibov"] = "\u05D2\u05D9\u05D1\u05D5\u05D1";
    reportsType["sadamCleare"] = "\u05D4\u05DB\u05E8\u05D6\u05D4";
    reportsType["event"] = "\u05D0\u05D9\u05E8\u05D5\u05E2";
})(reportsType || (exports.reportsType = reportsType = {}));
var divisions;
(function (divisions) {
    divisions["makhnar"] = "\u05DE\u05E7\u05D4\u05E0\u201D\u05E8";
    divisions["northernDivision"] = "\u05D0\u05D5\u05D2\u05D3\u05D4 \u05E6\u05E4\u05D5\u05E0\u05D9\u05EA";
    divisions["centralDivision"] = "\u05D0\u05D5\u05D2\u05D3\u05D4 \u05DE\u05E8\u05DB\u05D6";
    divisions["southernDivision"] = "\u05D0\u05D5\u05D2\u05D3\u05D4 \u05D3\u05E8\u05D5\u05DE\u05D9\u05EA";
})(divisions || (exports.divisions = divisions = {}));
//   export enum RISKS = {
//     minesWeeper: { name: "סחף מוקשים", id: 1 },
//     copyByAnimals: { name: `העתקה ע"י בע"ח`, id: 2 },
//     theftOfSigns: { name: "גניבת גדירות ושלטים ", id: 3 },
//     theftOfMines: { name: "גניבת מוקשים", id: 4 },
//     wasViolated: { name: "הופר", id: 5 },
//     scatteredMine: { name: "מיקוש פזיר ", id: 6 },
//     overThreeTypesOfMines: { name: "מעל שלוש סוגי מוקשים ", id: 7 },
//     mined: { name: "ממולכד", id: 8 },
//   };
var sadamsTypes;
(function (sadamsTypes) {
    sadamsTypes["NA"] = "\u05E0\"\u05D0";
    sadamsTypes["NT"] = "\u05E0\"\u05D8";
    sadamsTypes["involved"] = "\u05DE\u05E2\u05D5\u05E8\u05D1";
    sadamsTypes["suspect"] = "\u05D7\u05E9\u05D5\u05D3";
    sadamsTypes["dummy"] = "\u05D3\u05DE\u05D4";
    sadamsTypes["lighting"] = "\u05EA\u05D0\u05D5\u05E8\u05D4";
    sadamsTypes["unknown"] = "\u05DC\u05D0 \u05D9\u05D3\u05D5\u05E2";
    sadamsTypes["declared"] = "\u05DE\u05D5\u05DB\u05E8\u05D6";
    sadamsTypes["foreign"] = "\u05D6\u05E8";
})(sadamsTypes || (exports.sadamsTypes = sadamsTypes = {}));
var pikudim;
(function (pikudim) {
    pikudim["PZN"] = "\u05E4\u05E6\"\u05DF";
    pikudim["PKMZ"] = "\u05E4\u05E7\u05DE\"\u05D6";
    pikudim["PDM"] = "\u05E4\u05D3\"\u05DD";
})(pikudim || (exports.pikudim = pikudim = {}));
//   export enum UGDOT {
//     210="210",
//     91= "91",
//     877= "877",
//     162= "162",
//     80="80",
//     643="643",
//   };
var signageStatus;
(function (signageStatus) {
    signageStatus["signage"] = "\u05DE\u05E9\u05D5\u05DC\u05D8";
    signageStatus["noSignage"] = "\u05D0\u05D9\u05E0\u05D5 \u05DE\u05E9\u05D5\u05DC\u05D8";
    signageStatus["partialSignage"] = "\u05E9\u05D9\u05DC\u05D5\u05D8 \u05D7\u05DC\u05E7\u05D9";
    signageStatus["incorrect"] = "\u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF";
})(signageStatus || (exports.signageStatus = signageStatus = {}));
var fencingStatus;
(function (fencingStatus) {
    fencingStatus["fenced"] = "\u05DE\u05D2\u05D5\u05D3\u05E8";
    fencingStatus["noFenced"] = "\u05D0\u05D9\u05E0\u05D5 \u05DE\u05D2\u05D5\u05D3\u05E8";
    fencingStatus["partialFencing"] = "\u05D2\u05D9\u05D3\u05D5\u05E8 \u05D7\u05DC\u05E7\u05D9";
    fencingStatus["incorrect"] = "\u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF";
})(fencingStatus || (exports.fencingStatus = fencingStatus = {}));
var liftTypes;
(function (liftTypes) {
    liftTypes["partialLifting"] = "\u05D4\u05E8\u05DE\u05D4 \u05D7\u05DC\u05E7\u05D9\u05EA";
    liftTypes["fullLift"] = "\u05D4\u05E8\u05DE\u05D4 \u05DE\u05DC\u05D0\u05D4";
})(liftTypes || (exports.liftTypes = liftTypes = {}));
var liftingMethod;
(function (liftingMethod) {
    liftingMethod["manual"] = "\u05D9\u05D3\u05E0\u05D9";
    liftingMethod["mechanical"] = "\u05DE\u05DB\u05E0\u05D9";
    liftingMethod["integrated"] = "\u05DE\u05E9\u05D5\u05DC\u05D1";
})(liftingMethod || (exports.liftingMethod = liftingMethod = {}));
var evacutionOperation;
(function (evacutionOperation) {
    evacutionOperation["IDF"] = "\u05E6\u05D4\"\u05DC";
    evacutionOperation["RLPT"] = "\u05E8\u05DC\u05E4\"\u05D8";
    evacutionOperation["unknown"] = "\u05DC\u05D0 \u05D9\u05D3\u05D5\u05E2";
})(evacutionOperation || (exports.evacutionOperation = evacutionOperation = {}));
var priority;
(function (priority) {
    priority["a"] = "\u05D0";
    priority["b"] = "\u05D1";
})(priority || (exports.priority = priority = {}));
var hativot;
(function (hativot) {
    hativot[hativot["hativa_474"] = 474] = "hativa_474";
    hativot[hativot["hativa_810"] = 810] = "hativa_810";
    hativot[hativot["hativa_300"] = 300] = "hativa_300";
    hativot[hativot["hativa_769"] = 769] = "hativa_769";
    hativot[hativot["hativa_417"] = 417] = "hativa_417";
    hativot[hativot["hativa_406"] = 406] = "hativa_406";
    hativot[hativot["hativa_270"] = 270] = "hativa_270";
    hativot[hativot["hativa_412"] = 412] = "hativa_412";
    hativot["benjamin"] = "\u05D1\u05E0\u05D9\u05DE\u05D9\u05DF";
    hativot["menashe"] = "\u05DE\u05E0\u05E9\u05D4";
    hativot["ephraim"] = "\u05D0\u05E4\u05E8\u05D9\u05D9\u05DD";
    hativot["etzion"] = "\u05E2\u05E6\u05D9\u05D5\u05DF";
    hativot["yehuda"] = "\u05D9\u05D4\u05D5\u05D3\u05D4";
    hativot["southern"] = "\u05D3\u05E8\u05D5\u05DE\u05D9\u05EA";
    hativot["northern"] = "\u05E6\u05E4\u05D5\u05E0\u05D9\u05EA";
    hativot["samaria"] = "\u05E9\u05D5\u05DE\u05E8\u05D5\u05DF";
})(hativot || (exports.hativot = hativot = {}));
