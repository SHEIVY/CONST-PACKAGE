"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Priority = exports.EvacutionOperation = exports.LiftingMethod = exports.LiftTypes = exports.FencingStatus = exports.SignStatus = exports.Risks = exports.ReportsType = exports.GibovType = exports.EventsType = exports.StatusReport = void 0;
var StatusReport;
(function (StatusReport) {
    StatusReport["waitingForApprove"] = "\u05DE\u05D7\u05DB\u05D4 \u05DC\u05D0\u05D9\u05E9\u05D5\u05E8";
    StatusReport["approved"] = "\u05DE\u05D0\u05D5\u05E9\u05E8";
    StatusReport["notApproved"] = "\u05E1\u05D5\u05E8\u05D1";
    StatusReport["draft"] = "\u05D8\u05D9\u05D5\u05D8\u05D4";
})(StatusReport || (exports.StatusReport = StatusReport = {}));
var EventsType;
(function (EventsType) {
    EventsType["uncontrolledEntranceToSadam"] = "\u05DB\u05E0\u05D9\u05E1\u05D4 \u05DC\u05D0 \u05DE\u05D1\u05D5\u05E7\u05E8\u05EA \u05DC\u05E9\u05D3\"\u05DD";
    EventsType["rescueFromSadam"] = "\u05D7\u05D9\u05DC\u05D5\u05E5 \u05DE\u05E9\u05D3\"\u05DD";
    EventsType["driftingMinesInSadam"] = "\u05D4\u05D9\u05E1\u05D7\u05E4\u05D5\u05EA \u05DE\u05D5\u05E7\u05E9\u05D9\u05DD \u05D1\u05E9\u05D3\"\u05DD";
    EventsType["copyingMinesByAnimals"] = "\u05D4\u05E2\u05EA\u05E7\u05EA \u05DE\u05D5\u05E7\u05E9\u05D9\u05DD \u05E2\"\u05D9 \u05D1\u05E2\"\u05D7";
    EventsType["steppedOnAMine"] = "\u05E2\u05DC\u05D9\u05D4 \u05E2\u05DC \u05DE\u05D5\u05E7\u05E9";
    EventsType["explosionInSadam"] = "\u05E4\u05D9\u05E6\u05D5\u05E5 \u05D1\u05E9\u05D3\"\u05DD";
    EventsType["theftOfMinesFromSadam"] = "\u05D2\u05E0\u05D9\u05D1\u05EA \u05DE\u05D5\u05E7\u05E9\u05D9\u05DD \u05DE\u05E9\u05D3\"\u05DD";
    EventsType["throwingMines"] = "\u05D6\u05E8\u05D9\u05E7\u05EA \u05DE\u05D5\u05E7\u05E9\u05D9\u05DD";
    EventsType["violationInSadamNA"] = "\u05D4\u05E4\u05E8\u05D4 \u05D1\u05E9\u05D3\"\u05DD \u05E0\"\u05D0";
    EventsType["mineDetection"] = "\u05D2\u05D9\u05DC\u05D5\u05D9 \u05DE\u05D5\u05E7\u05E9\u05D9\u05DD";
    EventsType["administrative"] = "\u05DE\u05E0\u05D4\u05DC\u05D9";
    EventsType["other"] = "\u05D0\u05D7\u05E8";
})(EventsType || (exports.EventsType = EventsType = {}));
var GibovType;
(function (GibovType) {
    GibovType["crissCross"] = "\u05E9\u05EA\u05D9 \u05D5\u05E2\u05E8\u05D1";
    GibovType["rows"] = "\u05E9\u05D5\u05E8\u05D5\u05EA";
})(GibovType || (exports.GibovType = GibovType = {}));
var ReportsType;
(function (ReportsType) {
    ReportsType["review"] = "\u05D1\u05D9\u05E7\u05D5\u05E8\u05EA";
    ReportsType["lift"] = "\u05D4\u05E8\u05DE\u05D4";
    ReportsType["gibov"] = "\u05D2\u05D9\u05D1\u05D5\u05D1";
    ReportsType["sadamCleare"] = "\u05D4\u05DB\u05E8\u05D6\u05D4";
    ReportsType["event"] = "\u05D0\u05D9\u05E8\u05D5\u05E2";
})(ReportsType || (exports.ReportsType = ReportsType = {}));
var Risks;
(function (Risks) {
    Risks["minesWeeper"] = "\u05E1\u05D7\u05E3 \u05DE\u05D5\u05E7\u05E9\u05D9\u05DD";
    Risks["copyByAnimals"] = "\u05D4\u05E2\u05EA\u05E7\u05D4 \u05E2\"\u05D9 \u05D1\u05E2\"\u05D7";
    Risks["theftOfSigns"] = "\u05D2\u05E0\u05D9\u05D1\u05EA \u05D2\u05D3\u05D9\u05E8\u05D5\u05EA \u05D5\u05E9\u05DC\u05D8\u05D9\u05DD";
    Risks["theftOfMines"] = "\u05D2\u05E0\u05D9\u05D1\u05EA \u05DE\u05D5\u05E7\u05E9\u05D9\u05DD";
    Risks["wasViolated"] = "\u05D4\u05D5\u05E4\u05E8";
    Risks["scatteredMine"] = "\u05DE\u05D9\u05E7\u05D5\u05E9 \u05E4\u05D6\u05D9\u05E8 ";
    Risks["overThreeTypesOfMines"] = "\u05DE\u05E2\u05DC \u05E9\u05DC\u05D5\u05E9 \u05E1\u05D5\u05D2\u05D9 \u05DE\u05D5\u05E7\u05E9\u05D9\u05DD ";
    Risks["mined"] = "\u05DE\u05DE\u05D5\u05DC\u05DB\u05D3";
})(Risks || (exports.Risks = Risks = {}));
var SignStatus;
(function (SignStatus) {
    SignStatus["signage"] = "\u05DE\u05E9\u05D5\u05DC\u05D8";
    SignStatus["noSignage"] = "\u05D0\u05D9\u05E0\u05D5 \u05DE\u05E9\u05D5\u05DC\u05D8";
    SignStatus["partialSignage"] = "\u05E9\u05D9\u05DC\u05D5\u05D8 \u05D7\u05DC\u05E7\u05D9";
    SignStatus["incorrect"] = "\u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF";
})(SignStatus || (exports.SignStatus = SignStatus = {}));
var FencingStatus;
(function (FencingStatus) {
    FencingStatus["fenced"] = "\u05DE\u05D2\u05D5\u05D3\u05E8";
    FencingStatus["noFenced"] = "\u05D0\u05D9\u05E0\u05D5 \u05DE\u05D2\u05D5\u05D3\u05E8";
    FencingStatus["partialFencing"] = "\u05D2\u05D9\u05D3\u05D5\u05E8 \u05D7\u05DC\u05E7\u05D9";
    FencingStatus["incorrect"] = "\u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF";
})(FencingStatus || (exports.FencingStatus = FencingStatus = {}));
var LiftTypes;
(function (LiftTypes) {
    LiftTypes["partialLifting"] = "\u05D4\u05E8\u05DE\u05D4 \u05D7\u05DC\u05E7\u05D9\u05EA";
    LiftTypes["fullLift"] = "\u05D4\u05E8\u05DE\u05D4 \u05DE\u05DC\u05D0\u05D4";
})(LiftTypes || (exports.LiftTypes = LiftTypes = {}));
var LiftingMethod;
(function (LiftingMethod) {
    LiftingMethod["manual"] = "\u05D9\u05D3\u05E0\u05D9";
    LiftingMethod["mechanical"] = "\u05DE\u05DB\u05E0\u05D9";
    LiftingMethod["integrated"] = "\u05DE\u05E9\u05D5\u05DC\u05D1";
})(LiftingMethod || (exports.LiftingMethod = LiftingMethod = {}));
var EvacutionOperation;
(function (EvacutionOperation) {
    EvacutionOperation["IDF"] = "\u05E6\u05D4\"\u05DC";
    EvacutionOperation["RLPT"] = "\u05E8\u05DC\u05E4\"\u05D8";
    EvacutionOperation["unknown"] = "\u05DC\u05D0 \u05D9\u05D3\u05D5\u05E2";
})(EvacutionOperation || (exports.EvacutionOperation = EvacutionOperation = {}));
var Priority;
(function (Priority) {
    Priority["a"] = "\u05D0";
    Priority["b"] = "\u05D1";
})(Priority || (exports.Priority = Priority = {}));
