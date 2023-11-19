export enum statusReport {
  waitingApproval = "מחכה לאישור",
  approved = "מאושר",
  notApproved = "סורב",
  draft = "טיוטה",
}

export enum unit {
  north = "צפון",
  central = "מרכז",
  South = "דרום",
}

export enum eventsType {
  uncontrolledEntranceToSadam = `כניסה לא מבוקרת לשד"ם`,
  extractionFromSadam = `חילוץ משד"ם`,
  driftingMinesInSadam = `היסחפות מוקשים בשד"ם`,
  copyingMinesByAnimals = `העתקת מוקשים ע"י בע"ח`,
  sheSteppedOnAMin = `עליה על מוקש`,
  explosionInSadam = `פיצוץ בשד"ם`,
  theftOfMinesFromSadam = `גניבת מוקשים משד"ם`,
  throwingMines = "זריקת מוקשים",
  toViolateInTheSadamN = `הפרה בשד"ם נ"א`,
  mineDetection = "גילוי מוקשים",
  administrative = "מנהלי",
  other = "אחר",
}
export enum gibovType {
  crissCross = "שתי וערב",
  rows = "שורות",
}

export enum reportsType {
  review = "ביקורת",
  lift = "הרמה",
  gibov = "גיבוב",
  sadamCleare = "הכרזה",
  event = "אירוע",
}

export enum divisions {
  makhnar = "מקהנ”ר",
  northernDivision = "אוגדה צפונית",
  centralDivision = "אוגדה מרכז",
  southernDivision = "אוגדה דרומית",
}

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

export enum sadamsTypes {
  NA = `נ"א`,
  NT = `נ"ט`,
  involved = "מעורב",
  suspect = "חשוד",
  dummy = "דמה",
  lighting = "תאורה",
  unknown = "לא ידוע",
  declared = "מוכרז",
  foreign = "זר",
}

export enum pikudim {
  PZN = `פצ"ן`,
  PKMZ = `פקמ"ז`,
  PDM = `פד"ם`,
}

//   export enum UGDOT {
//     210="210",
//     91= "91",
//     877= "877",
//     162= "162",
//     80="80",
//     643="643",
//   };

export enum signageStatus {
  signage = "משולט",
  noSignage = "אינו משולט",
  partialSignage = "שילוט חלקי",
  incorrect = "לא תקין",
}

export enum fencingStatus {
  fenced = "מגודר",
  noFenced = "אינו מגודר",
  partialFencing = "גידור חלקי",
  incorrect = "לא תקין",
}

export enum liftTypes {
  partialLifting = "הרמה חלקית",
  fullLift = "הרמה מלאה",
}

export enum liftingMethod {
  manual = "ידני",
  mechanical = "מכני",
  integrated = "משולב",
}

export enum evacutionOperation {
  IDF = `צה"ל`,
  RLPT = `רלפ"ט`,
  unknown = "לא ידוע",
}

export enum priority {
  a = "א",
  b = "ב",
}

export enum hativot {
  hativa_474 = 474,
  hativa_810 = 810,
  hativa_300 = 300,
  hativa_769 = 769,
  hativa_417 = 417,
  hativa_406 = 406,
  hativa_270 = 270,
  hativa_412 = 412,
  benjamin = "בנימין",
  menashe = "מנשה",
  ephraim = "אפריים",
  etzion = "עציון",
  yehuda = "יהודה",
  southern = "דרומית",
  northern = "צפונית",
  samaria = "שומרון",
}
